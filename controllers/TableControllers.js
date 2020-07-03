const db = require('./../connection')

module.exports={
    //====== get table ==== // 
    getTable:(req,res)=>{
        var sql1='select * from tablefe'
        db.query(sql1,(err,result1)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result1)
        })
    },

    addData:(req,res)=>{
        const newdata=req.body
        console.log(newdata);
        
        var sql=`insert into tablefe set ?`
        db.query(sql,newdata,(err,result)=>{
            if(err) return res.status(500).send(err)
            var sql1='select * from tablefe'
            db.query(sql1,(err,result1)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result1)
        })
        })
    },
    deleteData:(req,res)=>{
        const {idtable}=req.query
        console.log(idtable);
        
        var sql=`delete from tablefe where idtable=${idtable}`
        db.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            var sql1='select * from tablefe'
            db.query(sql1,(err,result1)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    deleteAlldata:(req,res)=>{
        var sql='truncate table tablefe'
        db.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            var sql1='select * from tablefe'
            db.query(sql1,(err,result1)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    },
    searchTable:(req,res)=>{
        const {pekerjaan}=req.query
        console.log(pekerjaan)
        
        var sql=`select * from tablefe where pekerjaan='${pekerjaan}'`
        db.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
                return res.status(200).send(result)
        })
    },
    editData:(req,res)=>{
        const {idtable}=req.params
        const editData=req.body
        console.log(editData);
        console.log(idtable);
        
        var sql=`update tablefe set ? where idtable=${idtable}`
        db.query(sql,editData,(err,result)=>{
            if(err) return res.status(500).send(err)
            var sql1='select * from tablefe'
            db.query(sql1,(err,result1)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(result1)
            })
        })
    }
}