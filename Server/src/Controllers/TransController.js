const Transaction = require('../Models/TransModel');


//@desc     Get All transactions 
// Route    Get /api/v1/transaction
//@access   Public

exports.getTransactions = async (req , res , next) => {
    try{
        const Transactions = await Transaction.find();
        return res.status(200).json({
            success:true,
            count : Transactions.length,
            data : Transactions
        })
    } catch(err){
        return res.send(500).json({
            success:false,
            error:'Server Error'
        })
    }
}

//@desc Add Transactions 
// @Route Post /api/v1/transactions
//@access Public
exports.AddTransactions = async (req ,res , next) => {
    try{
        const {Text , Amount} = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success:true,
            data:transaction
        })
    } catch(err){
        // res.status(500).send({Error:err.message});
        // console.log(err);
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({
                success:false,
                error:messages
            });
        }else{
            return res.status(500).json({
                success:false,
                error:'Server Error'
            });
        }
    }
}

//@desc Delete Transaction
//@route Delete /api/v1/transaction
//@access Public
exports.DeleteTransactions = async (req,res,next) => {
    try{
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'No transaction Found'
            });
        }
        await transaction.remove();
        return res.status(200).json({
            success:true,
            data:{}
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'Server Error'
        });
    }

}