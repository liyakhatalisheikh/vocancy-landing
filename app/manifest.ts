import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Vocancy",
        short_name: "Vocancy",
        description: "Human-powered job application service for software engineers.",
        start_url: "/",
        display: "standalone",
        background_color: "#030303",
        theme_color: "#030303",
        icons: [
            {
                src: "/icon",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/apple-icon",
                sizes: "32x32",
                type: "image/png",
            },
        ],
    };
}
