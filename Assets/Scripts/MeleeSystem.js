#pragma strict
var TheDamage : int = 100;
var Distance : float;
var MaxDistance : float = 1.5;
var TheSystem : Transform;


function Update () 
{
	//var animationPrefix = this.gameObject.name;
	var animationPrefix = "IronMace";
	if (Input.GetButtonDown("Fire1")) 
	{
		//Attack animation
		animation.Play(animationPrefix+"Attack");
	}
 	if (animation.isPlaying == false) 
 	{
 		animation.CrossFade(animationPrefix+"Idle");//this.gameObject.name+"Idle");
 	}
 	if (Input.GetKey (KeyCode.LeftShift))
 	{
 		animation.CrossFade(animationPrefix+"Run");
 	}
 	
 	if (Input.GetKeyUp(KeyCode.LeftShift))
 	{
 		animation.CrossFade(animationPrefix+"Idle");
 	}
}

function AttackDamage ()
{
	//Attack function
 	var hit : RaycastHit;
 	if (Physics.Raycast (TheSystem.transform.position, TheSystem.transform.TransformDirection(Vector3.forward), hit))
 	{ 
 		Distance = hit.distance;
 		if (Distance < MaxDistance)
 		{
 			hit.transform.SendMessage ("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
 		}
 	}
}