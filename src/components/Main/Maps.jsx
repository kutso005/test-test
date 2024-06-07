"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YandexMap = () => {
    const coordinates = [59.907478, 30.324797];

    const defaultState = {
        center: coordinates,
        zoom: 15,
    };

    return (
        <YMaps>
            <Map
                className="map"
                defaultState={defaultState}
            >
                <Placemark geometry={coordinates} />
            </Map>
        </YMaps>
    );
};
