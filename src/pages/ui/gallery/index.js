import React, { PureComponent } from "react";
import { Card, Row, Col, Modal } from "antd";
import styles from "./style.module.less";
class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      currentImg: ''
    }
  }

  openGallery = (imgSrc) => {
    this.setState(() => ({
      visible: true,
      currentImg: require('@/assets/images/gallery/' + imgSrc)
    }))
  }
  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
    const imgList = imgs.map((list) => list.map((item, index) =>
      <Card 
        key={index}
        style={{ marginBottom: '10px', cursor: 'pointer' }}
        cover={<img src={require('@/assets/images/gallery/' + item)} onClick={() => this.openGallery(item)} alt="tips"/>}
      >
        <Card.Meta
          title="React"
          description="I Love React"
        />
      </Card>
    ))
    return (
      <div className={styles.gallery}>
        <Row gutter={10}>
          <Col md={5}>
            {imgList[0]}
          </Col>
          <Col md={5}>
            {imgList[1]}
          </Col>
          <Col md={5}>
            {imgList[2]}
          </Col>
          <Col md={5}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>
        <Modal
          width={300}
          height={500}
          visible={this.state.visible}
          title="图片画廊"
          onCancel={() => {
            this.setState(() => ({
              visible: false
            }))
          }}
          footer={null}
        >
          {<img src={this.state.currentImg} alt="show" style={{ width: '100%' }} />}
        </Modal>
      </div>
    );
  }
}
export default Gallery;
