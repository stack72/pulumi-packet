// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Packet
{
    public static partial class Invokes
    {
        /// <summary>
        /// Provides a Packet Block Storage Volume datasource to allow you to read existing volumes.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/volume.html.markdown.
        /// </summary>
        public static Task<GetVolumeResult> GetVolume(GetVolumeArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVolumeResult>("packet:index/getVolume:getVolume", args ?? ResourceArgs.Empty, options.WithVersion());
    }

    public sealed class GetVolumeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of volume for lookup
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The ID the parent Packet project (for lookup by name)
        /// </summary>
        [Input("projectId")]
        public Input<string>? ProjectId { get; set; }

        [Input("volumeId")]
        public Input<string>? VolumeId { get; set; }

        public GetVolumeArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetVolumeResult
    {
        /// <summary>
        /// The billing cycle, defaults to hourly
        /// </summary>
        public readonly string BillingCycle;
        public readonly string Created;
        public readonly string Description;
        /// <summary>
        /// UUIDs of devices to which this volume is attached
        /// </summary>
        public readonly ImmutableArray<string> DeviceIds;
        /// <summary>
        /// The facility slug the volume resides in
        /// </summary>
        public readonly string Facility;
        /// <summary>
        /// Whether the volume is locked or not
        /// </summary>
        public readonly bool Locked;
        /// <summary>
        /// The name of the volume
        /// * `project_id ` - The project id the volume is in
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Performance plan the volume is on
        /// </summary>
        public readonly string Plan;
        public readonly string ProjectId;
        /// <summary>
        /// The size in GB of the volume
        /// </summary>
        public readonly int Size;
        public readonly ImmutableArray<Outputs.GetVolumeSnapshotPoliciesResult> SnapshotPolicies;
        /// <summary>
        /// The state of the volume
        /// </summary>
        public readonly string State;
        public readonly string Updated;
        public readonly string VolumeId;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetVolumeResult(
            string billingCycle,
            string created,
            string description,
            ImmutableArray<string> deviceIds,
            string facility,
            bool locked,
            string name,
            string plan,
            string projectId,
            int size,
            ImmutableArray<Outputs.GetVolumeSnapshotPoliciesResult> snapshotPolicies,
            string state,
            string updated,
            string volumeId,
            string id)
        {
            BillingCycle = billingCycle;
            Created = created;
            Description = description;
            DeviceIds = deviceIds;
            Facility = facility;
            Locked = locked;
            Name = name;
            Plan = plan;
            ProjectId = projectId;
            Size = size;
            SnapshotPolicies = snapshotPolicies;
            State = state;
            Updated = updated;
            VolumeId = volumeId;
            Id = id;
        }
    }

    namespace Outputs
    {

    [OutputType]
    public sealed class GetVolumeSnapshotPoliciesResult
    {
        public readonly int SnapshotCount;
        public readonly string SnapshotFrequency;

        [OutputConstructor]
        private GetVolumeSnapshotPoliciesResult(
            int snapshotCount,
            string snapshotFrequency)
        {
            SnapshotCount = snapshotCount;
            SnapshotFrequency = snapshotFrequency;
        }
    }
    }
}
