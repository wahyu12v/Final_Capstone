import { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
            return;
        }

        let didCancel = false;

        const getLocation = () => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    if (!didCancel) {
                        onSuccess(position);
                    }
                },
                (error) => {
                    if (!didCancel) {
                        onError(error);
                    }
                }
            );
        };

        getLocation();

        // Cleanup function
        return () => {
            didCancel = true;
        };
    }, []);

    return location;
};

export default useGeoLocation;
