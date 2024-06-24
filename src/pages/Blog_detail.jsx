import '../dist/css/dt.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import img from '../assets/blog/1.png';
import img2 from '../assets/blog/bunga3.png';
import img3 from '../assets/blog/bunga2.png';
import imgp from '../assets/blog/p1.png';
import imgp2 from '../assets/blog/p2.png';
import imgp3 from '../assets/blog/p3.png';

const BlogDetail = () => {

    const blogs = [
        { id: 1, img: img, title: 'Cara mudah untuk merawat tanaman anda', text: 'Sangat dipastikan, kita ingin melihat taman yang ada dirumah kita bersih dan indah.', profileImg: imgp, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 2, img: img2, title: '5 Cara Mudah Rawat Tanaman Indoor, Biar Nggak Layu', text: 'Berikut trik dan tips merawat tanaman Indoor agar tidak layu.', profileImg: imgp2, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
        { id: 3, img: img3, title: '13 Cara mengatasi tanaman dari hama', text: 'Usahakan untuk menggunakan media tanam yang sesuai dengan yang kamu mau', profileImg: imgp3, author: 'Danica A.', date: '11 Jan 2022', readTime: '5 min read' },
    ];

    const handleCardClick = () => {
        // Navigate to detail page or handle card click
    };

    return (
        <div className="blog-detail">
            <div className="title-section">
                <div className="title">
                    <a href="/blog" className="blog-category">Blog</a>
                    <i className="bi bi-chevron-right small-icon"></i>
                    <div className="post-title">Tips & Trick</div>
                    <i className="bi bi-chevron-right small-icon"></i>
                    <div className="post-title1">Cara mudah untuk merawat tanaman anda</div>
                </div>
            </div>
            <h1>Cara mudah untuk merawat tanaman anda</h1>
            <div className="containerd">
                <img className="profile-img" src={imgp} alt="Author" />
                <div className="content-flex">
                    <div className="metadata">
                        <div className="author-name">Danica A.</div>
                        <div className="metadata-container">
                            <div className="date">11 Jan 2022</div>
                            <div className="divider"></div>
                            <div className="read-time">5 min read</div>
                        </div>
                    </div>
                    <div className="social-links1 d-flex">
                        <a href="#"><i className="bi bi-link-45deg"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                    </div>
                </div>
            </div>

            <img className="custom-image" src={img2} alt="Custom" />

            <div className='blog-container'>
                <div className="introduction">Cara merawat tanaman</div>
                <p>Sangat dipastikan, kita ingin melihat taman yang ada dirumah kita bersih dan indah. Faktor keindahan dari sebuah taman adalah dari tanaman atau tumbuhannya. Maka dari itu kita harus memperhatikan kondisi tanaman tersebut agar tidak mati dan bisa tetap tumbuh.</p>
                <p>Dengan matinya tanaman pada taman rumah, membuat rumah menjadi tidak indah lagi. Biasanya tanaman yang mati itu karena perawatannya tidak tepat. Sehingga membuat tanaman menjadi mati dan layu.</p>
                <p>Sinar matahari sangat berguna dan wajib bagi tanaman pada taman, karena dengan adanya matahari membuat tanaman bisa melakukan fotosintetis. Dengan adanya proses fotosintetis, maka tanaman dapat menghasilkan oksigen yang banyak dan baik.</p>
                <p>Maka dari itu kita harus mencukupi kebutuhan sinar matahari pada taman. Pemberian sinar matahari pun akan berbeda tiap jenis tanamannya, untuk tanaman hias memerlukan 4-6 jam setiap harinya dan untuk sayur dan buah-buahan minimal 6 jam perharinya.</p>

                <div className="image-container">
                    <img className="image-detail" src={img3} alt="Placeholder Image" />
                    <div className="text-container">
                        <div className="vertical-line"></div>
                        <div className="text">tanaman-hias</div>
                    </div>
                </div>

                <div className='styled-text'>Menjaga Kelembapan Tanaman</div>
                <p>Pemilihan tanaman pada taman juga harus memperhatikan kondisi cuaca dan kelembaban area tersebut, maka dari itu dengan menjaga cuaca dan kelembaban yang pas, maka membuat tanaman menjadi lebih susah layu.</p>
                <p>Kita harus menanam tanaman dengan memperhatikan daerah kita, jika daerah kita berada di dataran rendah maka jangan menanam tanaman yang beriklim subtropis atau tanaman dataran tinggi.</p>

                <div className='text2'>Terakhir!</div>
                <p>Pada umumnya, setiap jenis tanaman membutuhkan air untuk kelangsungan hidupnya. Dengan adanya air juga membuat tanaman menjadi lebih sehat dan tidak kering. Tetapi kebutuhan air pada setiap jenis tanaman itu berbeda-beda.</p>
                <p>Rawatlah tanaman kalian mulai sekarang, agar selalu sehat.</p>
            </div>

            <div className='container-info'>
                <div className='text3'>Informasi Lainnya</div>
                <p>Informasi lainnya tentang tanaman yang mungkin anda butuhkan</p>

                <Container>
                    <Row>
                        {blogs.map(blog => (
                            <Col md={6} lg={4} className="mb-3" key={blog.id}>
                                <div className="card-container">
                                    <Card onClick={handleCardClick} className="custom-card">
                                        <Card.Img variant="top" src={blog.img} className="custom-card-img" />
                                        <Card.Body className="card-body-custom1">
                                            <div className="tips-trick">Tips & Trick</div>
                                            <Card.Title className="card-titlez">{blog.title}</Card.Title>
                                            <Card.Text className="card-text2">{blog.text}</Card.Text>
                                            <div className="containerblog1">
                                                <img className="profile-img" src={blog.profileImg} alt="profile" />
                                                <div className='metadata1'>
                                                    <div className="author-nameblog">{blog.author}</div>
                                                    <div className="metadata-container">
                                                        <div className="date">{blog.date}</div>
                                                        <div className="divider"></div>
                                                        <div className="read-time">{blog.readTime}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BlogDetail;