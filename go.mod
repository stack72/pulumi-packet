module github.com/pulumi/pulumi-packet

go 1.12

require (
	github.com/hashicorp/terraform v0.12.0-alpha4.0.20190401213546-16778fea9219
	github.com/pkg/errors v0.8.0
	github.com/pulumi/pulumi v0.17.6-0.20190410045519-ef5e148a73c0
	github.com/pulumi/pulumi-terraform v0.14.1-dev.0.20190415172837-c7a149bb88e1
	github.com/stretchr/testify v1.3.0
	github.com/terraform-providers/terraform-provider-packet v1.7.2
)

replace (
	github.com/Nvveen/Gotty => github.com/ijc25/Gotty v0.0.0-20170406111628-a8b993ba6abd
	github.com/golang/glog => github.com/pulumi/glog v0.0.0-20180820174630-7eaa6ffb71e4
)
