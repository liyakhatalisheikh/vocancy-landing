import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Vocancy",
        short_name: "Vocancy",
        description: "Automated job applications for software engineers.",
        start_url: "/",
        display: "standalone",
        background_color: "#030303",
        theme_color: "#030303",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
