const Game = require("../models/publisherModel")



const addGame = async(req,res)=>{
    const {title,publisher}=req.body;

    const game = new Game({
        title,
        publisher
    })

    const result = await game.save()
    console.log("result-->>>",result)
    return res.status(200).json({
        message:"Data added successfully",
        data:result
    })

}

const updateGame = async (req,res)=>{
  
    const id = req.params.gameid
    const {publisher}=req.body;

    const  data = await Game.findByIdAndUpdate({_id:id},{
        $set:{
            'publisher.companyName':publisher,'publisher.website':publisher
        }
    })

    const result = await data.save()
    console.log("updateResult-->>>",result)
    return res.status(200).json({
        message:"update successfully",
        data:result
    })

}






module.exports={
         addGame,
         updateGame
}