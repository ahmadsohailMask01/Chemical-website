"use client";
const MapComponent = ({ lat, lng }) => {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&t=k&z=15&output=embed`;

  return (
    <section
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <iframe
        width="100%"
        height="400px"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapSrc}
      />
    </section>
  );
};

export default MapComponent;
