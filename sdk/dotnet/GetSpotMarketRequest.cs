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
        /// Provides a Packet spot_market_request datasource. The datasource will contain list of device IDs created by referenced Spot Market Request.
        /// 
        /// &gt; This content is derived from https://github.com/terraform-providers/terraform-provider-packet/blob/master/website/docs/d/spot_market_request.html.markdown.
        /// </summary>
        public static Task<GetSpotMarketRequestResult> GetSpotMarketRequest(GetSpotMarketRequestArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSpotMarketRequestResult>("packet:index/getSpotMarketRequest:getSpotMarketRequest", args ?? ResourceArgs.Empty, options.WithVersion());
    }

    public sealed class GetSpotMarketRequestArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The id of the Spot Market Request
        /// </summary>
        [Input("requestId", required: true)]
        public Input<string> RequestId { get; set; } = null!;

        public GetSpotMarketRequestArgs()
        {
        }
    }

    [OutputType]
    public sealed class GetSpotMarketRequestResult
    {
        /// <summary>
        /// List of IDs of devices spawned by the referenced Spot Market Request
        /// </summary>
        public readonly ImmutableArray<string> DeviceIds;
        public readonly string RequestId;
        /// <summary>
        /// id is the provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;

        [OutputConstructor]
        private GetSpotMarketRequestResult(
            ImmutableArray<string> deviceIds,
            string requestId,
            string id)
        {
            DeviceIds = deviceIds;
            RequestId = requestId;
            Id = id;
        }
    }
}
