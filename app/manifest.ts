import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Vocancy",
        short_name: "Vocancy",
        description: "The curated talent network for GCC engineers.",
        start_url: "/",
        display: "standalone",
        background_color: "#030303",
        theme_color: "#030303",
        orientation: "portrait",
        categories: ["business", "finance", "productivity"],
        icons: [
            {
                src: "/icon",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
