import React from 'react';
import Pokemon from "./Pokemon";
class Main extends React.Component{
    componentDidMount () {
     
       

      }
    render() {
        const listPokemon = [
            {
                name:"Nino",
                image:"/img/1-1.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Itsuki",
                image:"/img/1-2.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Miku",
                image:"/img/1-3.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Yotsuba",
                image:"/img/1-4.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Ichika",
                image:"/img/1-5.png",
                gambar:"/img/b4.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            }
        ]
        return(
       
            <div className="">
                <div className='main'>
                    <div  className='hello-container'>
                       <img src='/img/logo.png' alt='' width={500}></img>
                    </div>
                    {/* <div className='pokemon-container'>
                        
                        <div className='list-card'>
                        {listPokemon.map((pokemon)=>{
                            return(
                                <Pokemon name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction}/>
                            );
                        })}
                        </div>
                    </div> */}
                    {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
                </div>
                
            </div>
            
        );
       
    };
    
}

export default Main;