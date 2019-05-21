export default class CrimeService {

    constructor(resource) {
        
        this._resource = resource('descubraoassassino');

    }

    list() {
            
        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possível conexão com o servidor, favor tente mais tarde.');
        });
    }

save(crime) {

    return this._resource
        .save(crime)
        .then(function(res) {
            if(res.data != null){
                switch(res.data){
                    case 0:                                                        
                        this.message = null;
                        this.data = res.data;                            
                        this.showModal = true;
                        break;
                    case 1:
                        this.message = 'Atenção! Suspeito incorreto!';
                        this.data = res.data;
                        break;
                    case 2:
                        this.message = 'Atenção! Local incorreto!';
                        this.data = res.data;
                        break;
                    case 3:
                        this.message = 'Atenção! Arma incorreta!';
                        this.data = res.data;
                        break;
                }
            }
        },
        err => {
            console.log(err);
            throw new Error('Não foi possível conexão com o servidor, favor tente mais tarde.'); 
        });
    }
}   