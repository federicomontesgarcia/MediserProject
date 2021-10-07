const PruebaCtrl={}

PruebaCtrl.obtener=(req,res)=>{
    res.send('funcionando desde Get')
}
PruebaCtrl.crear=async(req,res)=>{
    const {nombre,apellido,salario}=req.body
    const NuevoRegistro=new Empleado({
        nombre,apellido,salario
    })
    await NuevoRegistro.save()
    res.json({
        mensaje:'Empleado guardado'
     })


}
PruebaCtrl.actualizar=(req,res)=>{
    res.send('Funcionando desde put')
}
PruebaCtrl.eliminar=(req,res)=>{
    res.send('Funcionando desde delete')
}
PruebaCtrl.post=(req,res)=>{
    res.send('Funcionando desde post')
}

module.exports=PruebaCtrl