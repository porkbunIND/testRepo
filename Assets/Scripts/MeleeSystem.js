#pragma strict
var TheDamage : int = 100;
var Distance : float;
var MaxDistance : float = 1.5;
var TheMace : Transform;


function Update () 
{
	if (Input.GetButtonDown("Fire1")) 
	{
		//Attack animation
		TheMace.animation.Play("Attack");
		//Attack function
	 	var hit : RaycastHit;
	 	if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit))
	 	{ 
	 		Distance = hit.distance;
	 		if (Distance < MaxDistance)
	 		{
	 			hit.transform.SendMessage ("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
	 		}
	 	}
 	}
 	if (TheMace.animation.isPlaying == false) 
 	{
 		TheMace.animation.CrossFade("Idle");
 	}
 	if (Input.GetKey (KeyCode.LeftShift))
 	{
 		TheMace.animation.CrossFade ("Run");
 	}
 	
 	if (Input.GetKeyUp(KeyCode.LeftShift))
 	{
 		TheMace.animation.CrossFade ("Idle");
 	}
}