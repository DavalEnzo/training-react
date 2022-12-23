import { Button, Spinner } from "flowbite-react";
import React from "react";

export default function Loading() {
    return (
        <div className="App-header">
            <Button>
                <Spinner color="success" size="xl" aria-label="Spinner button example"/>
                <span className="pl-3">
                      Chargement des données
                    </span>
            </Button>
        </div>
    );
}
