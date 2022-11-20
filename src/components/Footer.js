import React from 'react';
import Pokemon from "./Pokemon";
class Footer extends React.Component{
    componentDidMount () {
     
       

      }
    render() {
        const listPokemon = [
            {
                name:"Nino",
                image:"/img/2-1.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Itsuki",
                image:"/img/2-2.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Miku",
                image:"/img/2-3.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Yotsuba",
                image:"/img/2-4.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Ichika",
                image:"/img/2-5.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            }
        ]
        return(
       
            <div className="main-wrapper">
                <div className='main'>
                    {/* <div  className='hello-container'>
                       <img src='/img/Go-Toubun_no_Hanayome_logo2.png' alt=''></img>
                    </div> */}
                    <div className='pokemon-container'>
                        
                        <div className='list-card'>
                        {listPokemon.map((pokemon)=>{
                            return(
                                <Pokemon name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction}/>
                            );
                        })}
                        </div>
                    </div>
                    {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
                </div>
                
            </div>
            
        );
       
    };
    
}

export default Footer;