import { Sequelize } from 'sequelize';


const sequelize=new Sequelize('electron','root','Raghukotni$05',{
    host:'localhost',
    logging:false,
    dialect:'mysql'
});

try{
    await sequelize.authenticate();
    console.log("Connection established");
}catch(error){
    console.log("unable to connect");
}

export default sequelize;