import ProopTypes from 'prop-types';

export function Button ({text, name = 'user'}) {
    console.log(text)
    if (!text){
     console.error('el texto es requerido');   
    }

    return <button  className="btn btn-info"> 
    {text} - {name}
    </button>
}

Button.ProopTypes = {
    text: ProopTypes.string.isRequired
}