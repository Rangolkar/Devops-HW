import boto3
def create_keypair():
    outfile = open('ec2-keypair.pem','w')
    key_pair = ec2.create_key_pair(KeyName='ec2-keypair')
    KeyPairOut = str(key_pair.key_material)
    print(KeyPairOut)
    outfile.write(KeyPairOut)       


def create_instances_and_show_ip():
    ec2 = boto3.resource('ec2')
    response = ec2.create_instances(
        ImageId='ami-01aab85a5e4a5a0fe',
        MinCount=1,
        MaxCount=1,
        InstanceType='t2.micro',
        KeyName='ec2-keypair',
    )
    response[0].wait_until_running()
    response[0].reload()
    public_ip = response[0].public_ip_address
    print("Public IP for Instance ID {0} is {1}".format(response[0].instance_id, public_ip))

#create_keypair()
create_instances_and_show_ip()
