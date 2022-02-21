import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

let config = new pulumi.Config();
const keyName = config.require("key-name"); // Key must already exist
const instanceSize = "m5.large"; // Recommended size from course maintainer
const amiId = "ami-0e472ba40eb589f49"; // Ubuntu 18.04
const ebsDevice = {
  deviceName: "/dev/sda1",
  volumeSize: 20,
  deleteOnTermination: true,
};

const securityGroup = new aws.ec2.SecurityGroup("lfs258-sg", {
  name: "lfs258",
  ingress: [
    {
      description: "all traffic ingress",
      protocol: "-1",
      fromPort: 0,
      toPort: 0,
      cidrBlocks: ["0.0.0.0/0"],
    },
  ],
  egress: [
    {
      description: "all traffic egress",
      protocol: "-1",
      fromPort: 0,
      toPort: 0,
      cidrBlocks: ["0.0.0.0/0"],
    },
  ],
  tags: {
    Name: "lfs258",
  },
});

// Master node
const masterNode = new aws.ec2.Instance("lfs258-master-node", {
  instanceType: instanceSize,
  ami: amiId,
  keyName: keyName,
  tags: {
    Name: "lfs258-master-node",
  },
  ebsBlockDevices: [ebsDevice],
  vpcSecurityGroupIds: [securityGroup.id],
});

// Worker node
const workerNode = new aws.ec2.Instance("lfs258-worker-node", {
  instanceType: instanceSize,
  ami: amiId,
  keyName: keyName,
  tags: {
    Name: "lfs258-worker-node",
  },
  ebsBlockDevices: [ebsDevice],
  vpcSecurityGroupIds: [securityGroup.id],
});
