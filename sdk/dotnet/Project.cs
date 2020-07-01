// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Packet
{
    /// <summary>
    /// Provides a Packet project resource to allow you manage devices
    /// in your projects.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Packet = Pulumi.Packet;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         // Create a new project
    ///         var tfProject1 = new Packet.Project("tfProject1", new Packet.ProjectArgs
    ///         {
    ///             Name = "Terraform Fun",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// Example with BGP config
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Packet = Pulumi.Packet;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         // Create a new Project
    ///         var tfProject1 = new Packet.Project("tfProject1", new Packet.ProjectArgs
    ///         {
    ///             BgpConfig = new Packet.Inputs.ProjectBgpConfigArgs
    ///             {
    ///                 Asn = 65000,
    ///                 DeploymentType = "local",
    ///                 Md5 = "C179c28c41a85b",
    ///             },
    ///             Name = "tftest",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class Project : Pulumi.CustomResource
    {
        /// <summary>
        /// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
        /// </summary>
        [Output("backendTransfer")]
        public Output<bool?> BackendTransfer { get; private set; } = null!;

        /// <summary>
        /// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
        /// </summary>
        [Output("bgpConfig")]
        public Output<Outputs.ProjectBgpConfig?> BgpConfig { get; private set; } = null!;

        /// <summary>
        /// The timestamp for when the project was created
        /// </summary>
        [Output("created")]
        public Output<string> Created { get; private set; } = null!;

        /// <summary>
        /// The name of the project
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
        /// </summary>
        [Output("organizationId")]
        public Output<string> OrganizationId { get; private set; } = null!;

        /// <summary>
        /// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organization_id`, or default).
        /// </summary>
        [Output("paymentMethodId")]
        public Output<string> PaymentMethodId { get; private set; } = null!;

        /// <summary>
        /// The timestamp for the last time the project was updated
        /// </summary>
        [Output("updated")]
        public Output<string> Updated { get; private set; } = null!;


        /// <summary>
        /// Create a Project resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Project(string name, ProjectArgs args, CustomResourceOptions? options = null)
            : base("packet:index/project:Project", name, args ?? new ProjectArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Project(string name, Input<string> id, ProjectState? state = null, CustomResourceOptions? options = null)
            : base("packet:index/project:Project", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Project resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Project Get(string name, Input<string> id, ProjectState? state = null, CustomResourceOptions? options = null)
        {
            return new Project(name, id, state, options);
        }
    }

    public sealed class ProjectArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
        /// </summary>
        [Input("backendTransfer")]
        public Input<bool>? BackendTransfer { get; set; }

        /// <summary>
        /// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
        /// </summary>
        [Input("bgpConfig")]
        public Input<Inputs.ProjectBgpConfigArgs>? BgpConfig { get; set; }

        /// <summary>
        /// The name of the project
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
        /// </summary>
        [Input("organizationId")]
        public Input<string>? OrganizationId { get; set; }

        /// <summary>
        /// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organization_id`, or default).
        /// </summary>
        [Input("paymentMethodId")]
        public Input<string>? PaymentMethodId { get; set; }

        public ProjectArgs()
        {
        }
    }

    public sealed class ProjectState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Enable or disable [Backend Transfer](https://www.packet.com/developers/docs/network/basic/backend-transfer/), default is false
        /// </summary>
        [Input("backendTransfer")]
        public Input<bool>? BackendTransfer { get; set; }

        /// <summary>
        /// Optional BGP settings. Refer to [Packet guide for BGP](https://www.packet.com/developers/docs/network/advanced/local-and-global-bgp/).
        /// </summary>
        [Input("bgpConfig")]
        public Input<Inputs.ProjectBgpConfigGetArgs>? BgpConfig { get; set; }

        /// <summary>
        /// The timestamp for when the project was created
        /// </summary>
        [Input("created")]
        public Input<string>? Created { get; set; }

        /// <summary>
        /// The name of the project
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The UUID of organization under which you want to create the project. If you leave it out, the project will be create under your the default organization of your account.
        /// </summary>
        [Input("organizationId")]
        public Input<string>? OrganizationId { get; set; }

        /// <summary>
        /// The UUID of payment method for this project. The payment method and the project need to belong to the same organization (passed with `organization_id`, or default).
        /// </summary>
        [Input("paymentMethodId")]
        public Input<string>? PaymentMethodId { get; set; }

        /// <summary>
        /// The timestamp for the last time the project was updated
        /// </summary>
        [Input("updated")]
        public Input<string>? Updated { get; set; }

        public ProjectState()
        {
        }
    }
}
