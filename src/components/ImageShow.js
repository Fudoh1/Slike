function ImageShow({ image }) {
    return (
      <div>
        <img
          src={image.urls.small}
          alt={image.alt_description}
          style={{
            margin: '10px',
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>
    );
  }
  
  export default ImageShow;