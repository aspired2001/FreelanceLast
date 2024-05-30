import React from "react";

export function DefaultGallery() {
    const data = [
        {
            imageLink:
                "assets/st.JPG",
        },
        {
            imageLink:
                "assets/st1.JPG",
        },
        {
            imageLink:
                "assets/st2.JPG",
        },
        {
            imageLink:
                "assets/st3.JPG",
        },
        {
            imageLink:
                "assets/st4.JPG",
        },
        {
            imageLink:
                "assets/st5.JPG",
        },
        {
            imageLink:
                "assets/st6.JPG",
        },
        {
            imageLink:
                "assets/st7.JPG",
        },
        {
            imageLink:
                "assets/st8.JPG",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink }, index) => (
                <div key={index}>
                    <img
                        className="h-40 lg:h-48 w-full max-w-full rounded-lg object-cover object-center"
                        src={imageLink}
                        alt="gallery-photo"
                    />
                </div>
            ))}
        </div>
    );
}