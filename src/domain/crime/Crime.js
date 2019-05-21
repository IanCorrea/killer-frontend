export default class Crime {

    constructor(IdSuspeito='1', IdArma='1', IdLocal='1', IdMisterio='') {

        this.IdSuspeito = IdSuspeito;
        this.IdArma = IdArma;
        this.IdLocal = IdLocal;
        this.IdMisterio = IdMisterio;
    }

    get iconSuspeito() {
        return this.searchIcon('suspeito', this.IdSuspeito)
    }
    
    get iconArma() {
        return this.searchIcon('arma', this.IdArma)
    }

    get iconLocal() {
        return this.searchIcon('local', this.IdLocal)
    }

    searchIcon(object, id) {
        if(object == 'suspeito'){
            switch(id){            
                case 1:                            
                    return '/static/icons/esqueleto.jpg';
                    break;
                case 2:
                    return '/static/icons/khan.jpg';
                    break;
                case 3:
                    return '/static/icons/darth-vader.png';
                    break;
                case 4:
                    return '/static/icons/sideshow-bob.jpg';
                    break;
                case 5:
                    return '/static/icons/coringa.png';
                    break;
                case 6:
                    return '/static/icons/duende-verde.jpg';
                    break;
                case 7:
                    return '/static/icons/ze-caixao.jpg';
                    break;
                case 8:
                    return '/static/icons/mun-ha.jpg';
                    break;                    
                case 9:
                    return '/static/icons/vetor.jpg';
                    break; 
                case 10:
                    return '/static/icons/bizarro.jpg';
                    break; 
            }
        }
        else if(object == 'arma'){
            switch(id){            
                case 1:                            
                    return '/static/icons/cajado.png';
                    break;
                case 2:
                    return '/static/icons/phaser.png';
                    break;
                case 3:
                    return '/static/icons/peixeira.jpg';
                    break;
                case 4:
                    return '/static/icons/trezoitao.jpg';
                    break;
                case 5:                            
                    return '/static/icons/sabre-luz.png';
                    break;
                case 6:
                    return '/static/icons/bomba.png';
                    break;
                case 7:
                    return '/static/icons/pistola.jpg';
                    break;
                case 8:
                    return '/static/icons/marreta.jpg';
                    break;
                case 9:
                    return '/static/icons/visao-calor.jpg';
                    break;
                case 10:
                    return '/static/icons/anel.jpg';
                    break;
            }
        }
        else if(object == 'local'){
            switch(id){            
                case 1:                            
                    return '/static/icons/eternia.jpg';
                    break;
                case 2:
                    return '/static/icons/vulcano.jpg';
                    break;
                case 3:
                    return '/static/icons/tatooine.jpg';
                    break;
                case 4:
                    return '/static/icons/springfield.png';
                    break;
                case 5:
                    return '/static/icons/gotham.png';
                    break;
                case 6:
                    return '/static/icons/nova-york.jpg';
                    break;
                case 7:
                    return '/static/icons/siberia.jpg';
                    break;
                case 8:
                    return '/static/icons/matchu-picchu.jpg';
                    break;
                case 9:
                    return '/static/icons/acre.jpg';
                    break;
                case 10:
                    return '/static/icons/sao-paulo.jpg';
                    break;                    
            }
        }
    }
}