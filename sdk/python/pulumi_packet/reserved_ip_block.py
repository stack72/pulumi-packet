# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from . import _utilities, _tables

__all__ = ['ReservedIpBlock']


class ReservedIpBlock(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 facility: Optional[pulumi.Input[str]] = None,
                 project_id: Optional[pulumi.Input[str]] = None,
                 quantity: Optional[pulumi.Input[float]] = None,
                 type: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a resource to create and manage blocks of reserved IP addresses in a project.

        When a user provisions first device in a facility, Packet API automatically allocates IPv6/56 and private IPv4/25 blocks.
        The new device then gets IPv6 and private IPv4 addresses from those block. It also gets a public IPv4/31 address.
        Every new device in the project and facility will automatically get IPv6 and private IPv4 addresses from these pre-allocated blocks.
        The IPv6 and private IPv4 blocks can't be created, only imported. With this resource, it's possible to create either public IPv4 blocks or global IPv4 blocks.

        Public blocks are allocated in a facility. Addresses from public blocks can only be assigned to devices in the facility. Public blocks can have mask from /24 (256 addresses) to /32 (1 address). If you create public block with this resource, you must fill the facility argmument.

        Addresses from global blocks can be assigned in any facility. Global blocks can have mask from /30 (4 addresses), to /32 (1 address). If you create global block with this resource, you must specify type = "global_ipv4" and you must omit the facility argument.

        Once IP block is allocated or imported, an address from it can be assigned to device with the `IpAttachment` resource.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Arbitrary description
        :param pulumi.Input[str] facility: Facility where to allocate the public IP address block, makes sense only for type==public_ipv4, must be empty for type==global_ipv4
        :param pulumi.Input[str] project_id: The packet project ID where to allocate the address block
        :param pulumi.Input[float] quantity: The number of allocated /32 addresses, a power of 2
        :param pulumi.Input[str] type: Either "global_ipv4" or "public_ipv4", defaults to "public_ipv4" for backward compatibility
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['description'] = description
            __props__['facility'] = facility
            if project_id is None:
                raise TypeError("Missing required property 'project_id'")
            __props__['project_id'] = project_id
            if quantity is None:
                raise TypeError("Missing required property 'quantity'")
            __props__['quantity'] = quantity
            __props__['type'] = type
            __props__['address'] = None
            __props__['address_family'] = None
            __props__['cidr'] = None
            __props__['cidr_notation'] = None
            __props__['gateway'] = None
            __props__['global_'] = None
            __props__['manageable'] = None
            __props__['management'] = None
            __props__['netmask'] = None
            __props__['network'] = None
            __props__['public'] = None
        super(ReservedIpBlock, __self__).__init__(
            'packet:index/reservedIpBlock:ReservedIpBlock',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            address: Optional[pulumi.Input[str]] = None,
            address_family: Optional[pulumi.Input[float]] = None,
            cidr: Optional[pulumi.Input[float]] = None,
            cidr_notation: Optional[pulumi.Input[str]] = None,
            description: Optional[pulumi.Input[str]] = None,
            facility: Optional[pulumi.Input[str]] = None,
            gateway: Optional[pulumi.Input[str]] = None,
            global_: Optional[pulumi.Input[bool]] = None,
            manageable: Optional[pulumi.Input[bool]] = None,
            management: Optional[pulumi.Input[bool]] = None,
            netmask: Optional[pulumi.Input[str]] = None,
            network: Optional[pulumi.Input[str]] = None,
            project_id: Optional[pulumi.Input[str]] = None,
            public: Optional[pulumi.Input[bool]] = None,
            quantity: Optional[pulumi.Input[float]] = None,
            type: Optional[pulumi.Input[str]] = None) -> 'ReservedIpBlock':
        """
        Get an existing ReservedIpBlock resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[float] address_family: Address family as integer (4 or 6)
        :param pulumi.Input[float] cidr: length of CIDR prefix of the block as integer
        :param pulumi.Input[str] cidr_notation: Address and mask in CIDR notation, e.g. "147.229.15.30/31"
        :param pulumi.Input[str] description: Arbitrary description
        :param pulumi.Input[str] facility: Facility where to allocate the public IP address block, makes sense only for type==public_ipv4, must be empty for type==global_ipv4
        :param pulumi.Input[bool] global_: boolean flag whether addresses from a block are global (i.e. can be assigned in any facility)
        :param pulumi.Input[str] netmask: Mask in decimal notation, e.g. "255.255.255.0"
        :param pulumi.Input[str] network: Network IP address portion of the block specification
        :param pulumi.Input[str] project_id: The packet project ID where to allocate the address block
        :param pulumi.Input[bool] public: boolean flag whether addresses from a block are public
        :param pulumi.Input[float] quantity: The number of allocated /32 addresses, a power of 2
        :param pulumi.Input[str] type: Either "global_ipv4" or "public_ipv4", defaults to "public_ipv4" for backward compatibility
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["address"] = address
        __props__["address_family"] = address_family
        __props__["cidr"] = cidr
        __props__["cidr_notation"] = cidr_notation
        __props__["description"] = description
        __props__["facility"] = facility
        __props__["gateway"] = gateway
        __props__["global_"] = global_
        __props__["manageable"] = manageable
        __props__["management"] = management
        __props__["netmask"] = netmask
        __props__["network"] = network
        __props__["project_id"] = project_id
        __props__["public"] = public
        __props__["quantity"] = quantity
        __props__["type"] = type
        return ReservedIpBlock(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def address(self) -> pulumi.Output[str]:
        return pulumi.get(self, "address")

    @property
    @pulumi.getter(name="addressFamily")
    def address_family(self) -> pulumi.Output[float]:
        """
        Address family as integer (4 or 6)
        """
        return pulumi.get(self, "address_family")

    @property
    @pulumi.getter
    def cidr(self) -> pulumi.Output[float]:
        """
        length of CIDR prefix of the block as integer
        """
        return pulumi.get(self, "cidr")

    @property
    @pulumi.getter(name="cidrNotation")
    def cidr_notation(self) -> pulumi.Output[str]:
        """
        Address and mask in CIDR notation, e.g. "147.229.15.30/31"
        """
        return pulumi.get(self, "cidr_notation")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        Arbitrary description
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def facility(self) -> pulumi.Output[Optional[str]]:
        """
        Facility where to allocate the public IP address block, makes sense only for type==public_ipv4, must be empty for type==global_ipv4
        """
        return pulumi.get(self, "facility")

    @property
    @pulumi.getter
    def gateway(self) -> pulumi.Output[str]:
        return pulumi.get(self, "gateway")

    @property
    @pulumi.getter(name="global")
    def global_(self) -> pulumi.Output[bool]:
        """
        boolean flag whether addresses from a block are global (i.e. can be assigned in any facility)
        """
        return pulumi.get(self, "global_")

    @property
    @pulumi.getter
    def manageable(self) -> pulumi.Output[bool]:
        return pulumi.get(self, "manageable")

    @property
    @pulumi.getter
    def management(self) -> pulumi.Output[bool]:
        return pulumi.get(self, "management")

    @property
    @pulumi.getter
    def netmask(self) -> pulumi.Output[str]:
        """
        Mask in decimal notation, e.g. "255.255.255.0"
        """
        return pulumi.get(self, "netmask")

    @property
    @pulumi.getter
    def network(self) -> pulumi.Output[str]:
        """
        Network IP address portion of the block specification
        """
        return pulumi.get(self, "network")

    @property
    @pulumi.getter(name="projectId")
    def project_id(self) -> pulumi.Output[str]:
        """
        The packet project ID where to allocate the address block
        """
        return pulumi.get(self, "project_id")

    @property
    @pulumi.getter
    def public(self) -> pulumi.Output[bool]:
        """
        boolean flag whether addresses from a block are public
        """
        return pulumi.get(self, "public")

    @property
    @pulumi.getter
    def quantity(self) -> pulumi.Output[float]:
        """
        The number of allocated /32 addresses, a power of 2
        """
        return pulumi.get(self, "quantity")

    @property
    @pulumi.getter
    def type(self) -> pulumi.Output[Optional[str]]:
        """
        Either "global_ipv4" or "public_ipv4", defaults to "public_ipv4" for backward compatibility
        """
        return pulumi.get(self, "type")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

