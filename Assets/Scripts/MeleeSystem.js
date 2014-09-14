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
		if(this.gameObject.name == "Mace")
		{
			animation.Play("Attack");
		}
		if(this.gameObject.name == "Spear")
		{
			animation.Play("SpearAttack");
		}
	}
 	if (animation.isPlaying == false) 
 	{
 		if(this.gameObject.name == "Mace")
		{
			animation.CrossFade("Idle");
		}
		if(this.gameObject.name == "Spear")
		{
			animation.CrossFade("SpearIdle");
		}
 	}
 	if (Input.GetKey (KeyCode.LeftShift))
 	{
 		if(this.gameObject.name == "Mace")
		{
			animation.CrossFade("Run");
		}
		if(this.gameObject.name == "Spear")
		{
			animation.CrossFade("SpearRun");
		}
 	}
 	
 	if (Input.GetKeyUp(KeyCode.LeftShift))
 	{
 		if(this.gameObject.name == "Mace")
		{
			animation.CrossFade("Idle");
		}
		if(this.gameObject.name == "Spear")
		{
			animation.CrossFade("SpearIdle");
		}
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