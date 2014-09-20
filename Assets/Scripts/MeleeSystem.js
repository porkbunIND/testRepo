#pragma strict
var TheDamage : int = 100;
var Distance : float;
var MaxDistance : float = 1.5;
var TheSystem : Transform;


function Update () 
{
	if (Input.GetButtonDown("Fire1")) 
	{
		//Attack animation
		animation.Play(this.gameObject.name+"Attack");
	}
 	if (animation.isPlaying == false) 
 	{
 		animation.CrossFade("IronMaceIdle");//this.gameObject.name+"Idle");
 	}
 	if (Input.GetKey (KeyCode.LeftShift))
 	{
 		animation.CrossFade(this.gameObject.name+"Run");
 	}
 	
 	if (Input.GetKeyUp(KeyCode.LeftShift))
 	{
 		animation.CrossFade(this.gameObject.name+"Idle");
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