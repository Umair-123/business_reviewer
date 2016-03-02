var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var UserSchema=new Schema({
	name: String,
	username:{type: String,require:true,index:{unique:true}},
	password:{type:String,require:true},
	
	bznsPreview:
	{
		Comment:
		{
			comment:String,
			userId:Number
		},
		bznsProfile:
		{
			bizName:String,
			bizAddress:String,
			bizcategory:
			{
				catId:Number,
				catName:String
			},
			bizcity:String
		},
		Rating:
		{
			totalReviews:Number,
			avgRating:Number
		}

	} 
});


module.exports=mongoose.model('authUser',UserSchema);