import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          This product is designed to provide comfort, style, and durability.
          Made from high-quality materials, it ensures long-lasting performance
          while maintaining a modern and fashionable look. Perfect for everyday
          use, this item combines functionality and elegance to meet your daily
          needs.
        </p>
        <p>
          Whether you are looking for something casual or something that fits
          your active lifestyle, this product offers excellent value and
          reliability. Its premium design and carefully crafted details make it
          a great addition to your collection.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
