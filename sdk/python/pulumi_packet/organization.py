# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from . import utilities, tables

class Organization(pulumi.CustomResource):
    created: pulumi.Output[str]
    description: pulumi.Output[str]
    """
    Description string.
    """
    logo: pulumi.Output[str]
    """
    Logo URL.
    """
    name: pulumi.Output[str]
    """
    The name of the Organization.
    """
    twitter: pulumi.Output[str]
    """
    Twitter handle.
    """
    updated: pulumi.Output[str]
    website: pulumi.Output[str]
    """
    Website link.
    """
    def __init__(__self__, resource_name, opts=None, description=None, logo=None, name=None, twitter=None, website=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage organization resource in Packet.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] description: Description string.
        :param pulumi.Input[str] logo: Logo URL.
        :param pulumi.Input[str] name: The name of the Organization.
        :param pulumi.Input[str] twitter: Twitter handle.
        :param pulumi.Input[str] website: Website link.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['description'] = description

        __props__['logo'] = logo

        if name is None:
            raise TypeError("Missing required property 'name'")
        __props__['name'] = name

        __props__['twitter'] = twitter

        __props__['website'] = website

        __props__['created'] = None
        __props__['updated'] = None

        super(Organization, __self__).__init__(
            'packet:index/organization:Organization',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

