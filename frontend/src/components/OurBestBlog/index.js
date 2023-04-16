import React from 'react';
import { Container } from 'react-bootstrap';
import "./styles.css"
import italy from '../../assets/pexels-grafixartphoto-samir-belhamra-4254555.jpg';
import eiffel from '../../assets/pexels-nicolas-2267339.jpg';
import canada from '../../assets/pexels-headshatter-1252396.jpg';
import desert from '../../assets/pexels-belle-co-1000445.jpg';
import { BlogCard } from './BlogCard';
const OurBestBlog = () => {
    return (
        <Container>
            <div className='pt-5'>
                <h1 className='text-center'>Our best blogs?</h1>
                <p className='text-center'>An insight to the incredible experience in the world</p>
                <div className='row p-3'>
                    <BlogCard image={italy} title="Beautiful Italy. Let's Traveling!" content="Italy is one of the most popular vacation destinations in the world and it's no wonder." />
                    <BlogCard image={eiffel} title="Romatic moments under Eiffel Tower" content="he Eiffel Tower is the best background for a romantic Paris honeymoon portrait." />
                    <BlogCard image={canada} title="Let's Have an Adventure Outside Canada" content="Canada is one of the most popular vacation destinations in the world and it's no wonder." />
                    <BlogCard image={desert} title="New experience on a desert island with your friends" content="Italy is one of the most popular vacation destinations in the world, and it's no wonder." />
                </div>
            </div>
        </Container>
    )
}

export default OurBestBlog
