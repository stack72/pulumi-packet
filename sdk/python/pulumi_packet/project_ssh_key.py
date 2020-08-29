# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Dict, List, Mapping, Optional, Tuple, Union
from . import _utilities, _tables

__all__ = ['ProjectSshKey']


class ProjectSshKey(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 project_id: Optional[pulumi.Input[str]] = None,
                 public_key: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a Packet project SSH key resource to manage project-specific SSH keys.
        Project SSH keys will only be populated onto servers that belong to that project, in contrast to User SSH Keys.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_packet as packet

        project_id = "<UUID_of_your_project>"
        test_project_ssh_key = packet.ProjectSshKey("testProjectSshKey",
            name="test",
            public_key="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDM/unxJeFqxsTJcu6mhqsMHSaVlpu+Jj/P+44zrm6X/MAoHSX3X9oLgujEjjZ74yLfdfe0bJrbL2YgJzNaEkIQQ1VPMHB5EhTKUBGnzlPP0hHTnxsjAm9qDHgUPgvgFDQSAMzdJRJ0Cexo16Ph9VxCoLh3dxiE7s2gaM2FdVg7P8aSxKypsxAhYV3D0AwqzoOyT6WWhBoQ0xZ85XevOTnJCpImSemEGs6nVGEsWcEc1d1YvdxFjAK4SdsKUMkj4Dsy/leKsdi/DEAf356vbMT1UHsXXvy5TlHu/Pa6qF53v32Enz+nhKy7/8W2Yt2yWx8HnQcT2rug9lvCXagJO6oauqRTO77C4QZn13ZLMZgLT66S/tNh2EX0gi6vmIs5dth8uF+K6nxIyKJXbcA4ASg7F1OJrHKFZdTc5v1cPeq6PcbqGgc+8SrPYQmzvQqLoMBuxyos2hUkYOmw3aeWJj9nFa8Wu5WaN89mUeOqSkU4S5cgUzWUOmKey56B/j/s1sVys9rMhZapVs0wL4L9GBBM48N5jAQZnnpo85A8KsZq5ME22bTLqnxsDXqDYZvS7PSI6Dxi7eleOFE/NYYDkrgDLHTQri8ucDMVeVWHgoMY2bPXdn7KKy5jW5jKsf8EPARXg77A4gRYmgKrcwIKqJEUPqyxJBe0CPoGTqgXPRsUiQ== tomk@hp2",
            project_id=project_id)
        test_device = packet.Device("testDevice",
            hostname="test",
            plan="baremetal_0",
            facilities=["ewr1"],
            operating_system="ubuntu_16_04",
            billing_cycle="hourly",
            project_ssh_key_ids=[test_project_ssh_key.id],
            project_id=project_id)
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name of the SSH key for identification
        :param pulumi.Input[str] project_id: The ID of parent project
        :param pulumi.Input[str] public_key: The public key. If this is a file, it can be read using the file interpolation function
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

            if name is None:
                raise TypeError("Missing required property 'name'")
            __props__['name'] = name
            if project_id is None:
                raise TypeError("Missing required property 'project_id'")
            __props__['project_id'] = project_id
            if public_key is None:
                raise TypeError("Missing required property 'public_key'")
            __props__['public_key'] = public_key
            __props__['created'] = None
            __props__['fingerprint'] = None
            __props__['owner_id'] = None
            __props__['updated'] = None
        super(ProjectSshKey, __self__).__init__(
            'packet:index/projectSshKey:ProjectSshKey',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            created: Optional[pulumi.Input[str]] = None,
            fingerprint: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            owner_id: Optional[pulumi.Input[str]] = None,
            project_id: Optional[pulumi.Input[str]] = None,
            public_key: Optional[pulumi.Input[str]] = None,
            updated: Optional[pulumi.Input[str]] = None) -> 'ProjectSshKey':
        """
        Get an existing ProjectSshKey resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] created: The timestamp for when the SSH key was created
        :param pulumi.Input[str] fingerprint: The fingerprint of the SSH key
        :param pulumi.Input[str] name: The name of the SSH key for identification
        :param pulumi.Input[str] owner_id: The ID of parent project (same as project_id)
        :param pulumi.Input[str] project_id: The ID of parent project
        :param pulumi.Input[str] public_key: The public key. If this is a file, it can be read using the file interpolation function
        :param pulumi.Input[str] updated: The timestamp for the last time the SSH key was updated
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["created"] = created
        __props__["fingerprint"] = fingerprint
        __props__["name"] = name
        __props__["owner_id"] = owner_id
        __props__["project_id"] = project_id
        __props__["public_key"] = public_key
        __props__["updated"] = updated
        return ProjectSshKey(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def created(self) -> pulumi.Output[str]:
        """
        The timestamp for when the SSH key was created
        """
        return pulumi.get(self, "created")

    @property
    @pulumi.getter
    def fingerprint(self) -> pulumi.Output[str]:
        """
        The fingerprint of the SSH key
        """
        return pulumi.get(self, "fingerprint")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the SSH key for identification
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="ownerId")
    def owner_id(self) -> pulumi.Output[str]:
        """
        The ID of parent project (same as project_id)
        """
        return pulumi.get(self, "owner_id")

    @property
    @pulumi.getter(name="projectId")
    def project_id(self) -> pulumi.Output[str]:
        """
        The ID of parent project
        """
        return pulumi.get(self, "project_id")

    @property
    @pulumi.getter(name="publicKey")
    def public_key(self) -> pulumi.Output[str]:
        """
        The public key. If this is a file, it can be read using the file interpolation function
        """
        return pulumi.get(self, "public_key")

    @property
    @pulumi.getter
    def updated(self) -> pulumi.Output[str]:
        """
        The timestamp for the last time the SSH key was updated
        """
        return pulumi.get(self, "updated")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

