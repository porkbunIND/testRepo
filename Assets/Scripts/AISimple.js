var Distance;
var Target : Transform;
var LookAtDistance = 25.0;
var AttackRange = 15.0;
var MoveSpeed = 5.0;
var Damping = 6.0;

function Update ()
{
	Distance = Vector3.Distance(Target.position, transform.position);
	
	if(Distance < LookAtDistance)
	{
		renderer.material.color = Color.yellow;
		LookAt();
	}
	
	if(Distance > LookAtDistance)
	{
		renderer.material.color = Color.green;
	}
	
	if(Distance < AttackRange)
	{
		renderer.material.color = Color.red;
		Attack();
	}
}

function LookAt()
{
	var rotation = Quaternion.LookRotation(Target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Damping);
}

function Attack()
{
	transform.Translate(Vector3.forward * MoveSpeed * Time.deltaTime);
}