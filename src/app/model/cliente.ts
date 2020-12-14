export class Cliente{

    id:string;
    nome:string;
    cpf:string;
    telefone:string;
    email:string;
    cidade:string;
    bairro:string;
    endereco:string;
    ncasa:string;
    complemento:string;
    cep:string;

    setData(objFirebase : any){
        this.nome = objFirebase.nome;
        this.cpf = objFirebase.cpf;
        this.telefone = objFirebase.telefone;
        this.email = objFirebase.email;
        this.cidade = objFirebase.cidade;
        this.bairro = objFirebase.bairro;
        this.endereco = objFirebase.endereco;
        this.ncasa = objFirebase.ncasa;
        this.cep = objFirebase.cep;
    
    
    
    }
}