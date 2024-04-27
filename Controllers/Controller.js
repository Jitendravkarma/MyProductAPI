import { data } from '../Data/data.js';
const status = async (req, res)=>{
	try {
		res.status(200).json({message:'Status ok!'});
	}
	catch(err){
		res.status(404).json({message:'Page not found'});
	}
}

const product = async (req, res)=>{
	try {
		res.status(200).json({data});
	}
	catch(err){
		res.status(404).json({message:'Page not found'});
	}
}

// const register = async (req, res)=>{
// 	try {
// 		res.status(200).json({message:'Register successfully!', data:req.body});
// 	}
// 	catch(err){
// 		res.status(404).json({message:'Page not found'});
// 	}
// }

// const login = async (req, res)=>{
// 	try {
// 		res.status(200).json({message:'Login successfully!', data:{email:req.body.email, password:req.body.password}});
// 	}
// 	catch(err){
// 		res.status(404).json({message:'Page not found'});
// 	}
// }

export { status, product };