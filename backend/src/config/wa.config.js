import { makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore } from '@whiskeysockets/baileys';
import pino from "pino"
import fs from 'fs';

export const sessionOnMap = new Map();

export const connectToWhatsApp = async () => {
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
    const { state, saveCreds } = await useMultiFileAuthState('.auth_info');
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const sock = makeWASocket({
        printQRInTerminal: true,
        auth: state,
        logger: pino({ level: 'silent' }),
        browser: ["chrome (linux)", "", ""],
        keepAliveIntervalMs: 30_000,
        version
    });
    store.bind(sock.ev);
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            sessionOnMap.set(1, { sock, store });
        }
        if (connection === 'close') {
            sessionOnMap.delete(1);
            const logOutSession = () => {
                sock.logout();
                if (fs.existsSync('.auth_info')) {
                    fs.rmSync('.auth_info', { recursive: true, force: true });
                }
            }
            if (lastDisconnect?.error?.isBoom) {
                if (lastDisconnect?.error?.output?.statusCode === DisconnectReason.loggedOut) {
                    if (lastDisconnect?.error.output.payload.message != "Stream Errored (conflict)") {
                        setTimeout(async () => await connectToWhatsApp(), 1500)
                    }
                }
            } else {
                sessionOnMap.delete(1)
                logOutSession()
            }
        }
    })
    sock.ev.on('creds.update', saveCreds);
    return sock;
}
