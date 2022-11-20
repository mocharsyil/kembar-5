import React from 'react';
class Pokemon extends React.Component{
    constructor(props) {
        super(props);
        this.state={isOpen:false}
    }
    handleClick(){
        this.setState({isOpen:!this.state.isOpen});
    }
    render() {
        let modal='';
        if(this.state.isOpen){
            modal=(
                <div className='modal'>
                    <div className='modal-inner'>
                        <div className='modal-header'></div>
                        <div className='modal-introduction'>
                            <h2>{this.props.name}</h2>
                            {this.props.gambar}
                            <p>{this.props.introduction}</p>
                        </div>
                        <button onClick={()=>{this.handleClick()}} className='modal-close-btn'>Tutup</button>
                    </div>
                </div>
            );
        }
        return (
            <div onClick={()=>{this.handleClick()}} className='pokemon-card'>
                <div className='pokemon-item'>
                    <p>{this.props.name}</p>
                    <img src={this.props.image}/>
                </div>
                {modal}
            </div>
        );
    }
}
export default Pokemon;