
import { React } from 'react';
import { styled } from 'styled-components';
<<<<<<< HEAD
import '../../styles/style.css'
=======
import '../../styles/style.css';
>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4
import ImgSlider from '../../components/ImgSlider';
import IndexResgate from '../../components/IndexResgate';

function Index() {


  return (
    <>    
      <IndexResgate />
      <Container>
       <ImgSlider />
        <h2>HOME</h2>
      </Container>
<<<<<<< HEAD
      
=======
>>>>>>> 793f5a2800438c0c45e16dce15a374848ec8d8e4
    </>
  )

}

export default Index

const Container = styled.main`
position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 0px;
  padding: 0 calc(3.5vw + 5px);
  

a {
  display: flex;
  align-items: center;
  padding: 0 12px;

  span {
    color: white;
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
   

  }
}
`
  ;
