import React from "react";
import { Spinner, Card, CardImg } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const Gallery = (props) => {
  const { images } = props;

  const getImgUrl = (img) => {
    const imgUrl = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;
    return imgUrl;
  };

  const imageDisplayHandler = () => {
    return props.isLoading ? (
      <Spinner role="grow" />
    ) : images && images.length && typeof images !== undefined ? (
      <Container>
        <Row xs="3">
          {images.map((img, index) => (
            <Col key={index}>
              <Card style={{ marginTop: 15, marginBottom: 15 }}>
                <CardImg
                  top
                  style={{ height: 200, width: "auto", objectFit: "cover" }}
                  src={getImgUrl(img)}
                  alt={img.title}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    ) : (
      <h2>No image Found</h2>
    );
  };

  return imageDisplayHandler();
};

export default Gallery;
