const getGeoLocation = () => {
    return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
            reject({
                code: 0,
                message: "Geolocation not supported",
            });
            return;
        }

        setTimeout(() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        loaded: true,
                        coordinates: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        },
                    });
                },
                (error) => {
                    reject({
                        loaded: true,
                        error: {
                            code: error.code,
                            message: error.message,
                        },
                    });
                }
            );
        }, 3000);
    });
};

export default getGeoLocation;
