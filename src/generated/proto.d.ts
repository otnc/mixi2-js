import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace social. */
export namespace social {

    /** Namespace mixi. */
    namespace mixi {

        /** Namespace application. */
        namespace application {

            /** Namespace service. */
            namespace service {

                /** Namespace application_api. */
                namespace application_api {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Properties of a GetUsersRequest. */
                        interface IGetUsersRequest {

                            /** GetUsersRequest userIdList */
                            userIdList?: (string[]|null);
                        }

                        /** Represents a GetUsersRequest. */
                        class GetUsersRequest implements IGetUsersRequest {

                            /**
                             * Constructs a new GetUsersRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetUsersRequest);

                            /** GetUsersRequest userIdList. */
                            public userIdList: string[];

                            /**
                             * Creates a new GetUsersRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetUsersRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetUsersRequest): social.mixi.application.service.application_api.v1.GetUsersRequest;

                            /**
                             * Encodes the specified GetUsersRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetUsersRequest.verify|verify} messages.
                             * @param message GetUsersRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetUsersRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetUsersRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetUsersRequest;

                            /**
                             * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetUsersRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetUsersRequest;

                            /**
                             * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
                             * @param message GetUsersRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetUsersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetUsersRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetUsersResponse. */
                        interface IGetUsersResponse {

                            /** GetUsersResponse users */
                            users?: (social.mixi.application.model.v1.IUser[]|null);
                        }

                        /** Represents a GetUsersResponse. */
                        class GetUsersResponse implements IGetUsersResponse {

                            /**
                             * Constructs a new GetUsersResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetUsersResponse);

                            /** GetUsersResponse users. */
                            public users: social.mixi.application.model.v1.IUser[];

                            /**
                             * Creates a new GetUsersResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetUsersResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetUsersResponse): social.mixi.application.service.application_api.v1.GetUsersResponse;

                            /**
                             * Encodes the specified GetUsersResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetUsersResponse.verify|verify} messages.
                             * @param message GetUsersResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetUsersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetUsersResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetUsersResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetUsersResponse;

                            /**
                             * Creates a GetUsersResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetUsersResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetUsersResponse;

                            /**
                             * Creates a plain object from a GetUsersResponse message. Also converts values to other types if specified.
                             * @param message GetUsersResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetUsersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetUsersResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetPostsRequest. */
                        interface IGetPostsRequest {

                            /** GetPostsRequest postIdList */
                            postIdList?: (string[]|null);
                        }

                        /** Represents a GetPostsRequest. */
                        class GetPostsRequest implements IGetPostsRequest {

                            /**
                             * Constructs a new GetPostsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetPostsRequest);

                            /** GetPostsRequest postIdList. */
                            public postIdList: string[];

                            /**
                             * Creates a new GetPostsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetPostsRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetPostsRequest): social.mixi.application.service.application_api.v1.GetPostsRequest;

                            /**
                             * Encodes the specified GetPostsRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetPostsRequest.verify|verify} messages.
                             * @param message GetPostsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetPostsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetPostsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetPostsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetPostsRequest;

                            /**
                             * Creates a GetPostsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetPostsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetPostsRequest;

                            /**
                             * Creates a plain object from a GetPostsRequest message. Also converts values to other types if specified.
                             * @param message GetPostsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetPostsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetPostsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetPostsResponse. */
                        interface IGetPostsResponse {

                            /** GetPostsResponse posts */
                            posts?: (social.mixi.application.model.v1.IPost[]|null);
                        }

                        /** Represents a GetPostsResponse. */
                        class GetPostsResponse implements IGetPostsResponse {

                            /**
                             * Constructs a new GetPostsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetPostsResponse);

                            /** GetPostsResponse posts. */
                            public posts: social.mixi.application.model.v1.IPost[];

                            /**
                             * Creates a new GetPostsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetPostsResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetPostsResponse): social.mixi.application.service.application_api.v1.GetPostsResponse;

                            /**
                             * Encodes the specified GetPostsResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetPostsResponse.verify|verify} messages.
                             * @param message GetPostsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetPostsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetPostsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetPostsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetPostsResponse;

                            /**
                             * Creates a GetPostsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetPostsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetPostsResponse;

                            /**
                             * Creates a plain object from a GetPostsResponse message. Also converts values to other types if specified.
                             * @param message GetPostsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetPostsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetPostsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunitiesRequest. */
                        interface IGetCommunitiesRequest {

                            /** GetCommunitiesRequest communityIdList */
                            communityIdList?: (string[]|null);
                        }

                        /** Represents a GetCommunitiesRequest. */
                        class GetCommunitiesRequest implements IGetCommunitiesRequest {

                            /**
                             * Constructs a new GetCommunitiesRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesRequest);

                            /** GetCommunitiesRequest communityIdList. */
                            public communityIdList: string[];

                            /**
                             * Creates a new GetCommunitiesRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunitiesRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesRequest): social.mixi.application.service.application_api.v1.GetCommunitiesRequest;

                            /**
                             * Encodes the specified GetCommunitiesRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunitiesRequest.verify|verify} messages.
                             * @param message GetCommunitiesRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunitiesRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunitiesRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunitiesRequest;

                            /**
                             * Creates a GetCommunitiesRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunitiesRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunitiesRequest;

                            /**
                             * Creates a plain object from a GetCommunitiesRequest message. Also converts values to other types if specified.
                             * @param message GetCommunitiesRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunitiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunitiesRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunitiesResponse. */
                        interface IGetCommunitiesResponse {

                            /** GetCommunitiesResponse communities */
                            communities?: (social.mixi.application.model.v1.ICommunity[]|null);
                        }

                        /** Represents a GetCommunitiesResponse. */
                        class GetCommunitiesResponse implements IGetCommunitiesResponse {

                            /**
                             * Constructs a new GetCommunitiesResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesResponse);

                            /** GetCommunitiesResponse communities. */
                            public communities: social.mixi.application.model.v1.ICommunity[];

                            /**
                             * Creates a new GetCommunitiesResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunitiesResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesResponse): social.mixi.application.service.application_api.v1.GetCommunitiesResponse;

                            /**
                             * Encodes the specified GetCommunitiesResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunitiesResponse.verify|verify} messages.
                             * @param message GetCommunitiesResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunitiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunitiesResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunitiesResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunitiesResponse;

                            /**
                             * Creates a GetCommunitiesResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunitiesResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunitiesResponse;

                            /**
                             * Creates a plain object from a GetCommunitiesResponse message. Also converts values to other types if specified.
                             * @param message GetCommunitiesResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunitiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunitiesResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an InitiatePostMediaUploadRequest. */
                        interface IInitiatePostMediaUploadRequest {

                            /** InitiatePostMediaUploadRequest contentType */
                            contentType?: (string|null);

                            /** InitiatePostMediaUploadRequest dataSize */
                            dataSize?: (number|Long|null);

                            /** InitiatePostMediaUploadRequest mediaType */
                            mediaType?: (social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest.Type|null);

                            /** InitiatePostMediaUploadRequest description */
                            description?: (string|null);
                        }

                        /** Represents an InitiatePostMediaUploadRequest. */
                        class InitiatePostMediaUploadRequest implements IInitiatePostMediaUploadRequest {

                            /**
                             * Constructs a new InitiatePostMediaUploadRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IInitiatePostMediaUploadRequest);

                            /** InitiatePostMediaUploadRequest contentType. */
                            public contentType: string;

                            /** InitiatePostMediaUploadRequest dataSize. */
                            public dataSize: (number|Long);

                            /** InitiatePostMediaUploadRequest mediaType. */
                            public mediaType: social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest.Type;

                            /** InitiatePostMediaUploadRequest description. */
                            public description?: (string|null);

                            /**
                             * Creates a new InitiatePostMediaUploadRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InitiatePostMediaUploadRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IInitiatePostMediaUploadRequest): social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest;

                            /**
                             * Encodes the specified InitiatePostMediaUploadRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest.verify|verify} messages.
                             * @param message InitiatePostMediaUploadRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IInitiatePostMediaUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InitiatePostMediaUploadRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InitiatePostMediaUploadRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest;

                            /**
                             * Creates an InitiatePostMediaUploadRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InitiatePostMediaUploadRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest;

                            /**
                             * Creates a plain object from an InitiatePostMediaUploadRequest message. Also converts values to other types if specified.
                             * @param message InitiatePostMediaUploadRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InitiatePostMediaUploadRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace InitiatePostMediaUploadRequest {

                            /** Type enum. */
                            enum Type {
                                TYPE_UNSPECIFIED = 0,
                                TYPE_IMAGE = 1,
                                TYPE_VIDEO = 2
                            }
                        }

                        /** Properties of an InitiatePostMediaUploadResponse. */
                        interface IInitiatePostMediaUploadResponse {

                            /** InitiatePostMediaUploadResponse mediaId */
                            mediaId?: (string|null);

                            /** InitiatePostMediaUploadResponse uploadUrl */
                            uploadUrl?: (string|null);
                        }

                        /** Represents an InitiatePostMediaUploadResponse. */
                        class InitiatePostMediaUploadResponse implements IInitiatePostMediaUploadResponse {

                            /**
                             * Constructs a new InitiatePostMediaUploadResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IInitiatePostMediaUploadResponse);

                            /** InitiatePostMediaUploadResponse mediaId. */
                            public mediaId: string;

                            /** InitiatePostMediaUploadResponse uploadUrl. */
                            public uploadUrl: string;

                            /**
                             * Creates a new InitiatePostMediaUploadResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns InitiatePostMediaUploadResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IInitiatePostMediaUploadResponse): social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse;

                            /**
                             * Encodes the specified InitiatePostMediaUploadResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse.verify|verify} messages.
                             * @param message InitiatePostMediaUploadResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IInitiatePostMediaUploadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an InitiatePostMediaUploadResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns InitiatePostMediaUploadResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse;

                            /**
                             * Creates an InitiatePostMediaUploadResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns InitiatePostMediaUploadResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse;

                            /**
                             * Creates a plain object from an InitiatePostMediaUploadResponse message. Also converts values to other types if specified.
                             * @param message InitiatePostMediaUploadResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this InitiatePostMediaUploadResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetPostMediaStatusRequest. */
                        interface IGetPostMediaStatusRequest {

                            /** GetPostMediaStatusRequest mediaId */
                            mediaId?: (string|null);
                        }

                        /** Represents a GetPostMediaStatusRequest. */
                        class GetPostMediaStatusRequest implements IGetPostMediaStatusRequest {

                            /**
                             * Constructs a new GetPostMediaStatusRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetPostMediaStatusRequest);

                            /** GetPostMediaStatusRequest mediaId. */
                            public mediaId: string;

                            /**
                             * Creates a new GetPostMediaStatusRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetPostMediaStatusRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetPostMediaStatusRequest): social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest;

                            /**
                             * Encodes the specified GetPostMediaStatusRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest.verify|verify} messages.
                             * @param message GetPostMediaStatusRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetPostMediaStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetPostMediaStatusRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetPostMediaStatusRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest;

                            /**
                             * Creates a GetPostMediaStatusRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetPostMediaStatusRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest;

                            /**
                             * Creates a plain object from a GetPostMediaStatusRequest message. Also converts values to other types if specified.
                             * @param message GetPostMediaStatusRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetPostMediaStatusRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetPostMediaStatusResponse. */
                        interface IGetPostMediaStatusResponse {

                            /** GetPostMediaStatusResponse status */
                            status?: (social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse.Status|null);
                        }

                        /** Represents a GetPostMediaStatusResponse. */
                        class GetPostMediaStatusResponse implements IGetPostMediaStatusResponse {

                            /**
                             * Constructs a new GetPostMediaStatusResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetPostMediaStatusResponse);

                            /** GetPostMediaStatusResponse status. */
                            public status: social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse.Status;

                            /**
                             * Creates a new GetPostMediaStatusResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetPostMediaStatusResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetPostMediaStatusResponse): social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse;

                            /**
                             * Encodes the specified GetPostMediaStatusResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse.verify|verify} messages.
                             * @param message GetPostMediaStatusResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetPostMediaStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetPostMediaStatusResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetPostMediaStatusResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse;

                            /**
                             * Creates a GetPostMediaStatusResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetPostMediaStatusResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse;

                            /**
                             * Creates a plain object from a GetPostMediaStatusResponse message. Also converts values to other types if specified.
                             * @param message GetPostMediaStatusResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetPostMediaStatusResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace GetPostMediaStatusResponse {

                            /** Status enum. */
                            enum Status {
                                STATUS_UNSPECIFIED = 0,
                                STATUS_UPLOAD_PENDING = 1,
                                STATUS_PROCESSING = 2,
                                STATUS_COMPLETED = 3,
                                STATUS_FAILED = 4
                            }
                        }

                        /** Properties of a CreatePostRequest. */
                        interface ICreatePostRequest {

                            /** CreatePostRequest text */
                            text?: (string|null);

                            /** CreatePostRequest inReplyToPostId */
                            inReplyToPostId?: (string|null);

                            /** CreatePostRequest quotedPostId */
                            quotedPostId?: (string|null);

                            /** CreatePostRequest communityId */
                            communityId?: (string|null);

                            /** CreatePostRequest mediaIdList */
                            mediaIdList?: (string[]|null);

                            /** CreatePostRequest postMask */
                            postMask?: (social.mixi.application.model.v1.IPostMask|null);

                            /** CreatePostRequest publishingType */
                            publishingType?: (social.mixi.application.const_.v1.PostPublishingType|null);
                        }

                        /** Represents a CreatePostRequest. */
                        class CreatePostRequest implements ICreatePostRequest {

                            /**
                             * Constructs a new CreatePostRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.ICreatePostRequest);

                            /** CreatePostRequest text. */
                            public text: string;

                            /** CreatePostRequest inReplyToPostId. */
                            public inReplyToPostId?: (string|null);

                            /** CreatePostRequest quotedPostId. */
                            public quotedPostId?: (string|null);

                            /** CreatePostRequest communityId. */
                            public communityId?: (string|null);

                            /** CreatePostRequest mediaIdList. */
                            public mediaIdList: string[];

                            /** CreatePostRequest postMask. */
                            public postMask?: (social.mixi.application.model.v1.IPostMask|null);

                            /** CreatePostRequest publishingType. */
                            public publishingType?: (social.mixi.application.const_.v1.PostPublishingType|null);

                            /**
                             * Creates a new CreatePostRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CreatePostRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.ICreatePostRequest): social.mixi.application.service.application_api.v1.CreatePostRequest;

                            /**
                             * Encodes the specified CreatePostRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.CreatePostRequest.verify|verify} messages.
                             * @param message CreatePostRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.ICreatePostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CreatePostRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CreatePostRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.CreatePostRequest;

                            /**
                             * Creates a CreatePostRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CreatePostRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.CreatePostRequest;

                            /**
                             * Creates a plain object from a CreatePostRequest message. Also converts values to other types if specified.
                             * @param message CreatePostRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.CreatePostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CreatePostRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CreatePostResponse. */
                        interface ICreatePostResponse {

                            /** CreatePostResponse post */
                            post?: (social.mixi.application.model.v1.IPost|null);
                        }

                        /** Represents a CreatePostResponse. */
                        class CreatePostResponse implements ICreatePostResponse {

                            /**
                             * Constructs a new CreatePostResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.ICreatePostResponse);

                            /** CreatePostResponse post. */
                            public post?: (social.mixi.application.model.v1.IPost|null);

                            /**
                             * Creates a new CreatePostResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CreatePostResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.ICreatePostResponse): social.mixi.application.service.application_api.v1.CreatePostResponse;

                            /**
                             * Encodes the specified CreatePostResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.CreatePostResponse.verify|verify} messages.
                             * @param message CreatePostResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.ICreatePostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CreatePostResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CreatePostResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.CreatePostResponse;

                            /**
                             * Creates a CreatePostResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CreatePostResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.CreatePostResponse;

                            /**
                             * Creates a plain object from a CreatePostResponse message. Also converts values to other types if specified.
                             * @param message CreatePostResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.CreatePostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CreatePostResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DeletePostRequest. */
                        interface IDeletePostRequest {

                            /** DeletePostRequest postId */
                            postId?: (string|null);
                        }

                        /** Represents a DeletePostRequest. */
                        class DeletePostRequest implements IDeletePostRequest {

                            /**
                             * Constructs a new DeletePostRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IDeletePostRequest);

                            /** DeletePostRequest postId. */
                            public postId: string;

                            /**
                             * Creates a new DeletePostRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DeletePostRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IDeletePostRequest): social.mixi.application.service.application_api.v1.DeletePostRequest;

                            /**
                             * Encodes the specified DeletePostRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.DeletePostRequest.verify|verify} messages.
                             * @param message DeletePostRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IDeletePostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DeletePostRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DeletePostRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.DeletePostRequest;

                            /**
                             * Creates a DeletePostRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DeletePostRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.DeletePostRequest;

                            /**
                             * Creates a plain object from a DeletePostRequest message. Also converts values to other types if specified.
                             * @param message DeletePostRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.DeletePostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DeletePostRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DeletePostResponse. */
                        interface IDeletePostResponse {

                            /** DeletePostResponse deleted */
                            deleted?: (boolean|null);
                        }

                        /** Represents a DeletePostResponse. */
                        class DeletePostResponse implements IDeletePostResponse {

                            /**
                             * Constructs a new DeletePostResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IDeletePostResponse);

                            /** DeletePostResponse deleted. */
                            public deleted: boolean;

                            /**
                             * Creates a new DeletePostResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DeletePostResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IDeletePostResponse): social.mixi.application.service.application_api.v1.DeletePostResponse;

                            /**
                             * Encodes the specified DeletePostResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.DeletePostResponse.verify|verify} messages.
                             * @param message DeletePostResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IDeletePostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DeletePostResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DeletePostResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.DeletePostResponse;

                            /**
                             * Creates a DeletePostResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DeletePostResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.DeletePostResponse;

                            /**
                             * Creates a plain object from a DeletePostResponse message. Also converts values to other types if specified.
                             * @param message DeletePostResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.DeletePostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DeletePostResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunityTimelineRequest. */
                        interface IGetCommunityTimelineRequest {

                            /** GetCommunityTimelineRequest communityId */
                            communityId?: (string|null);

                            /** GetCommunityTimelineRequest untilCursor */
                            untilCursor?: (string|null);

                            /** GetCommunityTimelineRequest sinceCursor */
                            sinceCursor?: (string|null);
                        }

                        /** Represents a GetCommunityTimelineRequest. */
                        class GetCommunityTimelineRequest implements IGetCommunityTimelineRequest {

                            /**
                             * Constructs a new GetCommunityTimelineRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunityTimelineRequest);

                            /** GetCommunityTimelineRequest communityId. */
                            public communityId: string;

                            /** GetCommunityTimelineRequest untilCursor. */
                            public untilCursor?: (string|null);

                            /** GetCommunityTimelineRequest sinceCursor. */
                            public sinceCursor?: (string|null);

                            /**
                             * Creates a new GetCommunityTimelineRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunityTimelineRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunityTimelineRequest): social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest;

                            /**
                             * Encodes the specified GetCommunityTimelineRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest.verify|verify} messages.
                             * @param message GetCommunityTimelineRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunityTimelineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunityTimelineRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunityTimelineRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest;

                            /**
                             * Creates a GetCommunityTimelineRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunityTimelineRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest;

                            /**
                             * Creates a plain object from a GetCommunityTimelineRequest message. Also converts values to other types if specified.
                             * @param message GetCommunityTimelineRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunityTimelineRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunityTimelineResponse. */
                        interface IGetCommunityTimelineResponse {

                            /** GetCommunityTimelineResponse posts */
                            posts?: (social.mixi.application.model.v1.IPost[]|null);
                        }

                        /** Represents a GetCommunityTimelineResponse. */
                        class GetCommunityTimelineResponse implements IGetCommunityTimelineResponse {

                            /**
                             * Constructs a new GetCommunityTimelineResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunityTimelineResponse);

                            /** GetCommunityTimelineResponse posts. */
                            public posts: social.mixi.application.model.v1.IPost[];

                            /**
                             * Creates a new GetCommunityTimelineResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunityTimelineResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunityTimelineResponse): social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse;

                            /**
                             * Encodes the specified GetCommunityTimelineResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse.verify|verify} messages.
                             * @param message GetCommunityTimelineResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunityTimelineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunityTimelineResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunityTimelineResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse;

                            /**
                             * Creates a GetCommunityTimelineResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunityTimelineResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse;

                            /**
                             * Creates a plain object from a GetCommunityTimelineResponse message. Also converts values to other types if specified.
                             * @param message GetCommunityTimelineResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunityTimelineResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunityMemberListRequest. */
                        interface IGetCommunityMemberListRequest {

                            /** GetCommunityMemberListRequest communityId */
                            communityId?: (string|null);

                            /** GetCommunityMemberListRequest paginationCursor */
                            paginationCursor?: (string|null);
                        }

                        /** Represents a GetCommunityMemberListRequest. */
                        class GetCommunityMemberListRequest implements IGetCommunityMemberListRequest {

                            /**
                             * Constructs a new GetCommunityMemberListRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunityMemberListRequest);

                            /** GetCommunityMemberListRequest communityId. */
                            public communityId: string;

                            /** GetCommunityMemberListRequest paginationCursor. */
                            public paginationCursor?: (string|null);

                            /**
                             * Creates a new GetCommunityMemberListRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunityMemberListRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunityMemberListRequest): social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest;

                            /**
                             * Encodes the specified GetCommunityMemberListRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest.verify|verify} messages.
                             * @param message GetCommunityMemberListRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunityMemberListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunityMemberListRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunityMemberListRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest;

                            /**
                             * Creates a GetCommunityMemberListRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunityMemberListRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest;

                            /**
                             * Creates a plain object from a GetCommunityMemberListRequest message. Also converts values to other types if specified.
                             * @param message GetCommunityMemberListRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunityMemberListRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunityMemberListResponse. */
                        interface IGetCommunityMemberListResponse {

                            /** GetCommunityMemberListResponse members */
                            members?: (social.mixi.application.model.v1.IUser[]|null);

                            /** GetCommunityMemberListResponse nextPaginationCursor */
                            nextPaginationCursor?: (string|null);
                        }

                        /** Represents a GetCommunityMemberListResponse. */
                        class GetCommunityMemberListResponse implements IGetCommunityMemberListResponse {

                            /**
                             * Constructs a new GetCommunityMemberListResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunityMemberListResponse);

                            /** GetCommunityMemberListResponse members. */
                            public members: social.mixi.application.model.v1.IUser[];

                            /** GetCommunityMemberListResponse nextPaginationCursor. */
                            public nextPaginationCursor?: (string|null);

                            /**
                             * Creates a new GetCommunityMemberListResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunityMemberListResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunityMemberListResponse): social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse;

                            /**
                             * Encodes the specified GetCommunityMemberListResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse.verify|verify} messages.
                             * @param message GetCommunityMemberListResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunityMemberListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunityMemberListResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunityMemberListResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse;

                            /**
                             * Creates a GetCommunityMemberListResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunityMemberListResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse;

                            /**
                             * Creates a plain object from a GetCommunityMemberListResponse message. Also converts values to other types if specified.
                             * @param message GetCommunityMemberListResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunityMemberListResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a RestrictCommunityPostRequest. */
                        interface IRestrictCommunityPostRequest {

                            /** RestrictCommunityPostRequest postId */
                            postId?: (string|null);
                        }

                        /** Represents a RestrictCommunityPostRequest. */
                        class RestrictCommunityPostRequest implements IRestrictCommunityPostRequest {

                            /**
                             * Constructs a new RestrictCommunityPostRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IRestrictCommunityPostRequest);

                            /** RestrictCommunityPostRequest postId. */
                            public postId: string;

                            /**
                             * Creates a new RestrictCommunityPostRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RestrictCommunityPostRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IRestrictCommunityPostRequest): social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest;

                            /**
                             * Encodes the specified RestrictCommunityPostRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest.verify|verify} messages.
                             * @param message RestrictCommunityPostRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IRestrictCommunityPostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RestrictCommunityPostRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RestrictCommunityPostRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest;

                            /**
                             * Creates a RestrictCommunityPostRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RestrictCommunityPostRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest;

                            /**
                             * Creates a plain object from a RestrictCommunityPostRequest message. Also converts values to other types if specified.
                             * @param message RestrictCommunityPostRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RestrictCommunityPostRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a RestrictCommunityPostResponse. */
                        interface IRestrictCommunityPostResponse {
                        }

                        /** Represents a RestrictCommunityPostResponse. */
                        class RestrictCommunityPostResponse implements IRestrictCommunityPostResponse {

                            /**
                             * Constructs a new RestrictCommunityPostResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IRestrictCommunityPostResponse);

                            /**
                             * Creates a new RestrictCommunityPostResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns RestrictCommunityPostResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IRestrictCommunityPostResponse): social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse;

                            /**
                             * Encodes the specified RestrictCommunityPostResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse.verify|verify} messages.
                             * @param message RestrictCommunityPostResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IRestrictCommunityPostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a RestrictCommunityPostResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns RestrictCommunityPostResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse;

                            /**
                             * Creates a RestrictCommunityPostResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns RestrictCommunityPostResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse;

                            /**
                             * Creates a plain object from a RestrictCommunityPostResponse message. Also converts values to other types if specified.
                             * @param message RestrictCommunityPostResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this RestrictCommunityPostResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunitiesUsingApplicationRequest. */
                        interface IGetCommunitiesUsingApplicationRequest {

                            /** GetCommunitiesUsingApplicationRequest cursor */
                            cursor?: (string|null);
                        }

                        /** Represents a GetCommunitiesUsingApplicationRequest. */
                        class GetCommunitiesUsingApplicationRequest implements IGetCommunitiesUsingApplicationRequest {

                            /**
                             * Constructs a new GetCommunitiesUsingApplicationRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesUsingApplicationRequest);

                            /** GetCommunitiesUsingApplicationRequest cursor. */
                            public cursor?: (string|null);

                            /**
                             * Creates a new GetCommunitiesUsingApplicationRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunitiesUsingApplicationRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesUsingApplicationRequest): social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest;

                            /**
                             * Encodes the specified GetCommunitiesUsingApplicationRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest.verify|verify} messages.
                             * @param message GetCommunitiesUsingApplicationRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunitiesUsingApplicationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunitiesUsingApplicationRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunitiesUsingApplicationRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest;

                            /**
                             * Creates a GetCommunitiesUsingApplicationRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunitiesUsingApplicationRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest;

                            /**
                             * Creates a plain object from a GetCommunitiesUsingApplicationRequest message. Also converts values to other types if specified.
                             * @param message GetCommunitiesUsingApplicationRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunitiesUsingApplicationRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetCommunitiesUsingApplicationResponse. */
                        interface IGetCommunitiesUsingApplicationResponse {

                            /** GetCommunitiesUsingApplicationResponse communitiesUsingApplication */
                            communitiesUsingApplication?: (social.mixi.application.model.v1.ICommunityUsingApplication[]|null);

                            /** GetCommunitiesUsingApplicationResponse applicationVersions */
                            applicationVersions?: (social.mixi.application.model.v1.IApplicationVersion[]|null);

                            /** GetCommunitiesUsingApplicationResponse nextCursor */
                            nextCursor?: (string|null);
                        }

                        /** Represents a GetCommunitiesUsingApplicationResponse. */
                        class GetCommunitiesUsingApplicationResponse implements IGetCommunitiesUsingApplicationResponse {

                            /**
                             * Constructs a new GetCommunitiesUsingApplicationResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesUsingApplicationResponse);

                            /** GetCommunitiesUsingApplicationResponse communitiesUsingApplication. */
                            public communitiesUsingApplication: social.mixi.application.model.v1.ICommunityUsingApplication[];

                            /** GetCommunitiesUsingApplicationResponse applicationVersions. */
                            public applicationVersions: social.mixi.application.model.v1.IApplicationVersion[];

                            /** GetCommunitiesUsingApplicationResponse nextCursor. */
                            public nextCursor?: (string|null);

                            /**
                             * Creates a new GetCommunitiesUsingApplicationResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetCommunitiesUsingApplicationResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetCommunitiesUsingApplicationResponse): social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse;

                            /**
                             * Encodes the specified GetCommunitiesUsingApplicationResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse.verify|verify} messages.
                             * @param message GetCommunitiesUsingApplicationResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetCommunitiesUsingApplicationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetCommunitiesUsingApplicationResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetCommunitiesUsingApplicationResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse;

                            /**
                             * Creates a GetCommunitiesUsingApplicationResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetCommunitiesUsingApplicationResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse;

                            /**
                             * Creates a plain object from a GetCommunitiesUsingApplicationResponse message. Also converts values to other types if specified.
                             * @param message GetCommunitiesUsingApplicationResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetCommunitiesUsingApplicationResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SendChatMessageRequest. */
                        interface ISendChatMessageRequest {

                            /** SendChatMessageRequest roomId */
                            roomId?: (string|null);

                            /** SendChatMessageRequest text */
                            text?: (string|null);

                            /** SendChatMessageRequest mediaId */
                            mediaId?: (string|null);
                        }

                        /** Represents a SendChatMessageRequest. */
                        class SendChatMessageRequest implements ISendChatMessageRequest {

                            /**
                             * Constructs a new SendChatMessageRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.ISendChatMessageRequest);

                            /** SendChatMessageRequest roomId. */
                            public roomId: string;

                            /** SendChatMessageRequest text. */
                            public text?: (string|null);

                            /** SendChatMessageRequest mediaId. */
                            public mediaId?: (string|null);

                            /**
                             * Creates a new SendChatMessageRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SendChatMessageRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.ISendChatMessageRequest): social.mixi.application.service.application_api.v1.SendChatMessageRequest;

                            /**
                             * Encodes the specified SendChatMessageRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.SendChatMessageRequest.verify|verify} messages.
                             * @param message SendChatMessageRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.ISendChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SendChatMessageRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SendChatMessageRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.SendChatMessageRequest;

                            /**
                             * Creates a SendChatMessageRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SendChatMessageRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.SendChatMessageRequest;

                            /**
                             * Creates a plain object from a SendChatMessageRequest message. Also converts values to other types if specified.
                             * @param message SendChatMessageRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.SendChatMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SendChatMessageRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SendChatMessageResponse. */
                        interface ISendChatMessageResponse {

                            /** SendChatMessageResponse message */
                            message?: (social.mixi.application.model.v1.IChatMessage|null);
                        }

                        /** Represents a SendChatMessageResponse. */
                        class SendChatMessageResponse implements ISendChatMessageResponse {

                            /**
                             * Constructs a new SendChatMessageResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.ISendChatMessageResponse);

                            /** SendChatMessageResponse message. */
                            public message?: (social.mixi.application.model.v1.IChatMessage|null);

                            /**
                             * Creates a new SendChatMessageResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SendChatMessageResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.ISendChatMessageResponse): social.mixi.application.service.application_api.v1.SendChatMessageResponse;

                            /**
                             * Encodes the specified SendChatMessageResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.SendChatMessageResponse.verify|verify} messages.
                             * @param message SendChatMessageResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.ISendChatMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SendChatMessageResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SendChatMessageResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.SendChatMessageResponse;

                            /**
                             * Creates a SendChatMessageResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SendChatMessageResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.SendChatMessageResponse;

                            /**
                             * Creates a plain object from a SendChatMessageResponse message. Also converts values to other types if specified.
                             * @param message SendChatMessageResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.SendChatMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SendChatMessageResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetStampsRequest. */
                        interface IGetStampsRequest {

                            /** GetStampsRequest officialStampLanguage */
                            officialStampLanguage?: (social.mixi.application.const_.v1.LanguageCode|null);

                            /** GetStampsRequest communityIds */
                            communityIds?: (string[]|null);
                        }

                        /** Represents a GetStampsRequest. */
                        class GetStampsRequest implements IGetStampsRequest {

                            /**
                             * Constructs a new GetStampsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetStampsRequest);

                            /** GetStampsRequest officialStampLanguage. */
                            public officialStampLanguage?: (social.mixi.application.const_.v1.LanguageCode|null);

                            /** GetStampsRequest communityIds. */
                            public communityIds: string[];

                            /**
                             * Creates a new GetStampsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetStampsRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetStampsRequest): social.mixi.application.service.application_api.v1.GetStampsRequest;

                            /**
                             * Encodes the specified GetStampsRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetStampsRequest.verify|verify} messages.
                             * @param message GetStampsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetStampsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetStampsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetStampsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetStampsRequest;

                            /**
                             * Creates a GetStampsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetStampsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetStampsRequest;

                            /**
                             * Creates a plain object from a GetStampsRequest message. Also converts values to other types if specified.
                             * @param message GetStampsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetStampsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetStampsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a GetStampsResponse. */
                        interface IGetStampsResponse {

                            /** GetStampsResponse officialStampSets */
                            officialStampSets?: (social.mixi.application.model.v1.IOfficialStampSet[]|null);

                            /** GetStampsResponse communityStampSets */
                            communityStampSets?: (social.mixi.application.model.v1.ICommunityStampSet[]|null);
                        }

                        /** Represents a GetStampsResponse. */
                        class GetStampsResponse implements IGetStampsResponse {

                            /**
                             * Constructs a new GetStampsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IGetStampsResponse);

                            /** GetStampsResponse officialStampSets. */
                            public officialStampSets: social.mixi.application.model.v1.IOfficialStampSet[];

                            /** GetStampsResponse communityStampSets. */
                            public communityStampSets: social.mixi.application.model.v1.ICommunityStampSet[];

                            /**
                             * Creates a new GetStampsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GetStampsResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IGetStampsResponse): social.mixi.application.service.application_api.v1.GetStampsResponse;

                            /**
                             * Encodes the specified GetStampsResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.GetStampsResponse.verify|verify} messages.
                             * @param message GetStampsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IGetStampsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GetStampsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GetStampsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.GetStampsResponse;

                            /**
                             * Creates a GetStampsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GetStampsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.GetStampsResponse;

                            /**
                             * Creates a plain object from a GetStampsResponse message. Also converts values to other types if specified.
                             * @param message GetStampsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.GetStampsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GetStampsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AddStampToPostRequest. */
                        interface IAddStampToPostRequest {

                            /** AddStampToPostRequest postId */
                            postId?: (string|null);

                            /** AddStampToPostRequest stampId */
                            stampId?: (string|null);
                        }

                        /** Represents an AddStampToPostRequest. */
                        class AddStampToPostRequest implements IAddStampToPostRequest {

                            /**
                             * Constructs a new AddStampToPostRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IAddStampToPostRequest);

                            /** AddStampToPostRequest postId. */
                            public postId: string;

                            /** AddStampToPostRequest stampId. */
                            public stampId: string;

                            /**
                             * Creates a new AddStampToPostRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AddStampToPostRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IAddStampToPostRequest): social.mixi.application.service.application_api.v1.AddStampToPostRequest;

                            /**
                             * Encodes the specified AddStampToPostRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.AddStampToPostRequest.verify|verify} messages.
                             * @param message AddStampToPostRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IAddStampToPostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AddStampToPostRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AddStampToPostRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.AddStampToPostRequest;

                            /**
                             * Creates an AddStampToPostRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AddStampToPostRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.AddStampToPostRequest;

                            /**
                             * Creates a plain object from an AddStampToPostRequest message. Also converts values to other types if specified.
                             * @param message AddStampToPostRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.AddStampToPostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AddStampToPostRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an AddStampToPostResponse. */
                        interface IAddStampToPostResponse {

                            /** AddStampToPostResponse post */
                            post?: (social.mixi.application.model.v1.IPost|null);
                        }

                        /** Represents an AddStampToPostResponse. */
                        class AddStampToPostResponse implements IAddStampToPostResponse {

                            /**
                             * Constructs a new AddStampToPostResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.IAddStampToPostResponse);

                            /** AddStampToPostResponse post. */
                            public post?: (social.mixi.application.model.v1.IPost|null);

                            /**
                             * Creates a new AddStampToPostResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AddStampToPostResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.IAddStampToPostResponse): social.mixi.application.service.application_api.v1.AddStampToPostResponse;

                            /**
                             * Encodes the specified AddStampToPostResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.AddStampToPostResponse.verify|verify} messages.
                             * @param message AddStampToPostResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.IAddStampToPostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AddStampToPostResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AddStampToPostResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.AddStampToPostResponse;

                            /**
                             * Creates an AddStampToPostResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AddStampToPostResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.AddStampToPostResponse;

                            /**
                             * Creates a plain object from an AddStampToPostResponse message. Also converts values to other types if specified.
                             * @param message AddStampToPostResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.AddStampToPostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AddStampToPostResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SendDirectMessageToCommunityMemberRequest. */
                        interface ISendDirectMessageToCommunityMemberRequest {

                            /** SendDirectMessageToCommunityMemberRequest receiverId */
                            receiverId?: (string|null);

                            /** SendDirectMessageToCommunityMemberRequest communityId */
                            communityId?: (string|null);

                            /** SendDirectMessageToCommunityMemberRequest text */
                            text?: (string|null);

                            /** SendDirectMessageToCommunityMemberRequest mediaIds */
                            mediaIds?: (string[]|null);

                            /** SendDirectMessageToCommunityMemberRequest postId */
                            postId?: (string|null);
                        }

                        /** Represents a SendDirectMessageToCommunityMemberRequest. */
                        class SendDirectMessageToCommunityMemberRequest implements ISendDirectMessageToCommunityMemberRequest {

                            /**
                             * Constructs a new SendDirectMessageToCommunityMemberRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.ISendDirectMessageToCommunityMemberRequest);

                            /** SendDirectMessageToCommunityMemberRequest receiverId. */
                            public receiverId: string;

                            /** SendDirectMessageToCommunityMemberRequest communityId. */
                            public communityId: string;

                            /** SendDirectMessageToCommunityMemberRequest text. */
                            public text?: (string|null);

                            /** SendDirectMessageToCommunityMemberRequest mediaIds. */
                            public mediaIds: string[];

                            /** SendDirectMessageToCommunityMemberRequest postId. */
                            public postId?: (string|null);

                            /**
                             * Creates a new SendDirectMessageToCommunityMemberRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SendDirectMessageToCommunityMemberRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.ISendDirectMessageToCommunityMemberRequest): social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest;

                            /**
                             * Encodes the specified SendDirectMessageToCommunityMemberRequest message. Does not implicitly {@link social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest.verify|verify} messages.
                             * @param message SendDirectMessageToCommunityMemberRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.ISendDirectMessageToCommunityMemberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SendDirectMessageToCommunityMemberRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SendDirectMessageToCommunityMemberRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest;

                            /**
                             * Creates a SendDirectMessageToCommunityMemberRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SendDirectMessageToCommunityMemberRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest;

                            /**
                             * Creates a plain object from a SendDirectMessageToCommunityMemberRequest message. Also converts values to other types if specified.
                             * @param message SendDirectMessageToCommunityMemberRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SendDirectMessageToCommunityMemberRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SendDirectMessageToCommunityMemberResponse. */
                        interface ISendDirectMessageToCommunityMemberResponse {

                            /** SendDirectMessageToCommunityMemberResponse message */
                            message?: (social.mixi.application.model.v1.IChatMessage|null);
                        }

                        /** Represents a SendDirectMessageToCommunityMemberResponse. */
                        class SendDirectMessageToCommunityMemberResponse implements ISendDirectMessageToCommunityMemberResponse {

                            /**
                             * Constructs a new SendDirectMessageToCommunityMemberResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_api.v1.ISendDirectMessageToCommunityMemberResponse);

                            /** SendDirectMessageToCommunityMemberResponse message. */
                            public message?: (social.mixi.application.model.v1.IChatMessage|null);

                            /**
                             * Creates a new SendDirectMessageToCommunityMemberResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SendDirectMessageToCommunityMemberResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_api.v1.ISendDirectMessageToCommunityMemberResponse): social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse;

                            /**
                             * Encodes the specified SendDirectMessageToCommunityMemberResponse message. Does not implicitly {@link social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse.verify|verify} messages.
                             * @param message SendDirectMessageToCommunityMemberResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_api.v1.ISendDirectMessageToCommunityMemberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SendDirectMessageToCommunityMemberResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SendDirectMessageToCommunityMemberResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse;

                            /**
                             * Creates a SendDirectMessageToCommunityMemberResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SendDirectMessageToCommunityMemberResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse;

                            /**
                             * Creates a plain object from a SendDirectMessageToCommunityMemberResponse message. Also converts values to other types if specified.
                             * @param message SendDirectMessageToCommunityMemberResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SendDirectMessageToCommunityMemberResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Namespace application_stream. */
                namespace application_stream {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Properties of a SubscribeEventsRequest. */
                        interface ISubscribeEventsRequest {
                        }

                        /** Represents a SubscribeEventsRequest. */
                        class SubscribeEventsRequest implements ISubscribeEventsRequest {

                            /**
                             * Constructs a new SubscribeEventsRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_stream.v1.ISubscribeEventsRequest);

                            /**
                             * Creates a new SubscribeEventsRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SubscribeEventsRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.application_stream.v1.ISubscribeEventsRequest): social.mixi.application.service.application_stream.v1.SubscribeEventsRequest;

                            /**
                             * Encodes the specified SubscribeEventsRequest message. Does not implicitly {@link social.mixi.application.service.application_stream.v1.SubscribeEventsRequest.verify|verify} messages.
                             * @param message SubscribeEventsRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_stream.v1.ISubscribeEventsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SubscribeEventsRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SubscribeEventsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_stream.v1.SubscribeEventsRequest;

                            /**
                             * Creates a SubscribeEventsRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SubscribeEventsRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_stream.v1.SubscribeEventsRequest;

                            /**
                             * Creates a plain object from a SubscribeEventsRequest message. Also converts values to other types if specified.
                             * @param message SubscribeEventsRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_stream.v1.SubscribeEventsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SubscribeEventsRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SubscribeEventsResponse. */
                        interface ISubscribeEventsResponse {

                            /** SubscribeEventsResponse events */
                            events?: (social.mixi.application.model.v1.IEvent[]|null);
                        }

                        /** Represents a SubscribeEventsResponse. */
                        class SubscribeEventsResponse implements ISubscribeEventsResponse {

                            /**
                             * Constructs a new SubscribeEventsResponse.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.application_stream.v1.ISubscribeEventsResponse);

                            /** SubscribeEventsResponse events. */
                            public events: social.mixi.application.model.v1.IEvent[];

                            /**
                             * Creates a new SubscribeEventsResponse instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SubscribeEventsResponse instance
                             */
                            public static create(properties?: social.mixi.application.service.application_stream.v1.ISubscribeEventsResponse): social.mixi.application.service.application_stream.v1.SubscribeEventsResponse;

                            /**
                             * Encodes the specified SubscribeEventsResponse message. Does not implicitly {@link social.mixi.application.service.application_stream.v1.SubscribeEventsResponse.verify|verify} messages.
                             * @param message SubscribeEventsResponse message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.application_stream.v1.ISubscribeEventsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SubscribeEventsResponse message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SubscribeEventsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.application_stream.v1.SubscribeEventsResponse;

                            /**
                             * Creates a SubscribeEventsResponse message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SubscribeEventsResponse
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.application_stream.v1.SubscribeEventsResponse;

                            /**
                             * Creates a plain object from a SubscribeEventsResponse message. Also converts values to other types if specified.
                             * @param message SubscribeEventsResponse
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.application_stream.v1.SubscribeEventsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SubscribeEventsResponse to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }

                /** Namespace client_endpoint. */
                namespace client_endpoint {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Properties of a SendEventRequest. */
                        interface ISendEventRequest {

                            /** SendEventRequest events */
                            events?: (social.mixi.application.model.v1.IEvent[]|null);
                        }

                        /** Represents a SendEventRequest. */
                        class SendEventRequest implements ISendEventRequest {

                            /**
                             * Constructs a new SendEventRequest.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: social.mixi.application.service.client_endpoint.v1.ISendEventRequest);

                            /** SendEventRequest events. */
                            public events: social.mixi.application.model.v1.IEvent[];

                            /**
                             * Creates a new SendEventRequest instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SendEventRequest instance
                             */
                            public static create(properties?: social.mixi.application.service.client_endpoint.v1.ISendEventRequest): social.mixi.application.service.client_endpoint.v1.SendEventRequest;

                            /**
                             * Encodes the specified SendEventRequest message. Does not implicitly {@link social.mixi.application.service.client_endpoint.v1.SendEventRequest.verify|verify} messages.
                             * @param message SendEventRequest message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: social.mixi.application.service.client_endpoint.v1.ISendEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SendEventRequest message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SendEventRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.service.client_endpoint.v1.SendEventRequest;

                            /**
                             * Creates a SendEventRequest message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SendEventRequest
                             */
                            public static fromObject(object: { [k: string]: any }): social.mixi.application.service.client_endpoint.v1.SendEventRequest;

                            /**
                             * Creates a plain object from a SendEventRequest message. Also converts values to other types if specified.
                             * @param message SendEventRequest
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: social.mixi.application.service.client_endpoint.v1.SendEventRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SendEventRequest to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }
            }

            /** Namespace const. */
            namespace const_ {

                /** Namespace v1. */
                namespace v1 {

                    /** LanguageCode enum. */
                    enum LanguageCode {
                        LANGUAGE_CODE_UNSPECIFIED = 0,
                        LANGUAGE_CODE_JP = 1,
                        LANGUAGE_CODE_EN = 2
                    }

                    /** PostPublishingType enum. */
                    enum PostPublishingType {
                        POST_PUBLISHING_TYPE_UNSPECIFIED = 0,
                        POST_PUBLISHING_TYPE_NOT_PUBLISHING = 1
                    }

                    /** ApplicationRequirement enum. */
                    enum ApplicationRequirement {
                        APPLICATION_REQUIREMENT_UNSPECIFIED = 0,
                        APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_READ = 1,
                        APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_CREATE = 2,
                        APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_RESTRICT = 3,
                        APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_MEMBER_LIST_READ = 4,
                        APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_STAMP_CREATE = 10,
                        APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_MEMBER_DIRECT_MESSAGE_CREATE = 11,
                        APPLICATION_REQUIREMENT_EVENT_REACTION_REPLY = 5,
                        APPLICATION_REQUIREMENT_EVENT_REACTION_MENTION = 6,
                        APPLICATION_REQUIREMENT_EVENT_COMMUNITY_POST_CREATED = 7,
                        APPLICATION_REQUIREMENT_EVENT_COMMUNITY_MEMBER_JOINED = 8,
                        APPLICATION_REQUIREMENT_EVENT_DIRECT_MESSAGE_RECEIVED = 9
                    }

                    /** CommunityAccessLevel enum. */
                    enum CommunityAccessLevel {
                        COMMUNITY_ACCESS_LEVEL_UNSPECIFIED = 0,
                        COMMUNITY_ACCESS_LEVEL_PUBLIC = 1,
                        COMMUNITY_ACCESS_LEVEL_APPROVAL_REQUIRED = 2
                    }

                    /** CommunityVisibility enum. */
                    enum CommunityVisibility {
                        COMMUNITY_VISIBILITY_UNSPECIFIED = 0,
                        COMMUNITY_VISIBILITY_VISIBLE = 1,
                        COMMUNITY_VISIBILITY_INVISIBLE = 2
                    }

                    /** MediaType enum. */
                    enum MediaType {
                        MEDIA_TYPE_UNSPECIFIED = 0,
                        MEDIA_TYPE_IMAGE = 1,
                        MEDIA_TYPE_VIDEO = 2
                    }

                    /** PostAccessLevel enum. */
                    enum PostAccessLevel {
                        POST_ACCESS_LEVEL_UNSPECIFIED = 0,
                        POST_ACCESS_LEVEL_PUBLIC = 1,
                        POST_ACCESS_LEVEL_PRIVATE = 2
                    }

                    /** PostMaskType enum. */
                    enum PostMaskType {
                        POST_MASK_TYPE_UNSPECIFIED = 0,
                        POST_MASK_TYPE_SENSITIVE = 1,
                        POST_MASK_TYPE_SPOILER = 2
                    }

                    /** PostMediaType enum. */
                    enum PostMediaType {
                        POST_MEDIA_TYPE_UNSPECIFIED = 0,
                        POST_MEDIA_TYPE_IMAGE = 1,
                        POST_MEDIA_TYPE_VIDEO = 2
                    }

                    /** PostVisibility enum. */
                    enum PostVisibility {
                        POST_VISIBILITY_UNSPECIFIED = 0,
                        POST_VISIBILITY_VISIBLE = 1,
                        POST_VISIBILITY_INVISIBLE = 2
                    }

                    /** StampSetType enum. */
                    enum StampSetType {
                        STAMP_SET_TYPE_UNSPECIFIED = 0,
                        STAMP_SET_TYPE_DEFAULT = 1,
                        STAMP_SET_TYPE_SEASONAL = 2
                    }

                    /** UserAccessLevel enum. */
                    enum UserAccessLevel {
                        USER_ACCESS_LEVEL_UNSPECIFIED = 0,
                        USER_ACCESS_LEVEL_PUBLIC = 1,
                        USER_ACCESS_LEVEL_PRIVATE = 2
                    }

                    /** UserVisibility enum. */
                    enum UserVisibility {
                        USER_VISIBILITY_UNSPECIFIED = 0,
                        USER_VISIBILITY_VISIBLE = 1,
                        USER_VISIBILITY_INVISIBLE = 2
                    }

                    /** EventReason enum. */
                    enum EventReason {
                        EVENT_REASON_UNSPECIFIED = 0,
                        EVENT_REASON_PING = 1,
                        EVENT_REASON_POST_REPLY = 2,
                        EVENT_REASON_POST_MENTIONED = 3,
                        EVENT_REASON_POST_QUOTED = 4,
                        EVENT_REASON_POST_COMMUNITY = 5,
                        EVENT_REASON_COMMUNITY_MEMBER_JOINED = 6,
                        EVENT_REASON_COMMUNITY_MEMBER_LEFT = 7,
                        EVENT_REASON_DIRECT_MESSAGE_RECEIVED = 8,
                        EVENT_REASON_COMMUNITY_PLUGIN_INSTALLED = 9,
                        EVENT_REASON_COMMUNITY_PLUGIN_UNINSTALLED = 10
                    }

                    /** EventType enum. */
                    enum EventType {
                        EVENT_TYPE_UNSPECIFIED = 0,
                        EVENT_TYPE_PING = 1,
                        EVENT_TYPE_POST_CREATED = 2,
                        EVENT_TYPE_COMMUNITY_MEMBER_CHANGED = 3,
                        EVENT_TYPE_CHAT_MESSAGE_RECEIVED = 4,
                        EVENT_TYPE_COMMUNITY_PLUGIN_MANAGED = 5
                    }
                }
            }

            /** Namespace model. */
            namespace model {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of an ApplicationVersion. */
                    interface IApplicationVersion {

                        /** ApplicationVersion applicationVersionId */
                        applicationVersionId?: (string|null);

                        /** ApplicationVersion applicationId */
                        applicationId?: (string|null);

                        /** ApplicationVersion requirements */
                        requirements?: (social.mixi.application.const_.v1.ApplicationRequirement[]|null);
                    }

                    /** Represents an ApplicationVersion. */
                    class ApplicationVersion implements IApplicationVersion {

                        /**
                         * Constructs a new ApplicationVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IApplicationVersion);

                        /** ApplicationVersion applicationVersionId. */
                        public applicationVersionId: string;

                        /** ApplicationVersion applicationId. */
                        public applicationId: string;

                        /** ApplicationVersion requirements. */
                        public requirements: social.mixi.application.const_.v1.ApplicationRequirement[];

                        /**
                         * Creates a new ApplicationVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ApplicationVersion instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IApplicationVersion): social.mixi.application.model.v1.ApplicationVersion;

                        /**
                         * Encodes the specified ApplicationVersion message. Does not implicitly {@link social.mixi.application.model.v1.ApplicationVersion.verify|verify} messages.
                         * @param message ApplicationVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IApplicationVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ApplicationVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ApplicationVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.ApplicationVersion;

                        /**
                         * Creates an ApplicationVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ApplicationVersion
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.ApplicationVersion;

                        /**
                         * Creates a plain object from an ApplicationVersion message. Also converts values to other types if specified.
                         * @param message ApplicationVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.ApplicationVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ApplicationVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Community. */
                    interface ICommunity {

                        /** Community communityId */
                        communityId?: (string|null);

                        /** Community name */
                        name?: (string|null);

                        /** Community purpose */
                        purpose?: (string|null);

                        /** Community isArchived */
                        isArchived?: (boolean|null);

                        /** Community visibility */
                        visibility?: (social.mixi.application.const_.v1.CommunityVisibility|null);

                        /** Community accessLevel */
                        accessLevel?: (social.mixi.application.const_.v1.CommunityAccessLevel|null);
                    }

                    /** Represents a Community. */
                    class Community implements ICommunity {

                        /**
                         * Constructs a new Community.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.ICommunity);

                        /** Community communityId. */
                        public communityId: string;

                        /** Community name. */
                        public name: string;

                        /** Community purpose. */
                        public purpose: string;

                        /** Community isArchived. */
                        public isArchived: boolean;

                        /** Community visibility. */
                        public visibility: social.mixi.application.const_.v1.CommunityVisibility;

                        /** Community accessLevel. */
                        public accessLevel: social.mixi.application.const_.v1.CommunityAccessLevel;

                        /**
                         * Creates a new Community instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Community instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.ICommunity): social.mixi.application.model.v1.Community;

                        /**
                         * Encodes the specified Community message. Does not implicitly {@link social.mixi.application.model.v1.Community.verify|verify} messages.
                         * @param message Community message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.ICommunity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Community message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Community
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.Community;

                        /**
                         * Creates a Community message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Community
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.Community;

                        /**
                         * Creates a plain object from a Community message. Also converts values to other types if specified.
                         * @param message Community
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.Community, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Community to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommunityUsingApplication. */
                    interface ICommunityUsingApplication {

                        /** CommunityUsingApplication community */
                        community?: (social.mixi.application.model.v1.ICommunity|null);

                        /** CommunityUsingApplication applicationVersionId */
                        applicationVersionId?: (string|null);
                    }

                    /** Represents a CommunityUsingApplication. */
                    class CommunityUsingApplication implements ICommunityUsingApplication {

                        /**
                         * Constructs a new CommunityUsingApplication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.ICommunityUsingApplication);

                        /** CommunityUsingApplication community. */
                        public community?: (social.mixi.application.model.v1.ICommunity|null);

                        /** CommunityUsingApplication applicationVersionId. */
                        public applicationVersionId: string;

                        /**
                         * Creates a new CommunityUsingApplication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunityUsingApplication instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.ICommunityUsingApplication): social.mixi.application.model.v1.CommunityUsingApplication;

                        /**
                         * Encodes the specified CommunityUsingApplication message. Does not implicitly {@link social.mixi.application.model.v1.CommunityUsingApplication.verify|verify} messages.
                         * @param message CommunityUsingApplication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.ICommunityUsingApplication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunityUsingApplication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunityUsingApplication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.CommunityUsingApplication;

                        /**
                         * Creates a CommunityUsingApplication message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunityUsingApplication
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.CommunityUsingApplication;

                        /**
                         * Creates a plain object from a CommunityUsingApplication message. Also converts values to other types if specified.
                         * @param message CommunityUsingApplication
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.CommunityUsingApplication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunityUsingApplication to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ChatMessage. */
                    interface IChatMessage {

                        /** ChatMessage roomId */
                        roomId?: (string|null);

                        /** ChatMessage messageId */
                        messageId?: (string|null);

                        /** ChatMessage creatorId */
                        creatorId?: (string|null);

                        /** ChatMessage text */
                        text?: (string|null);

                        /** ChatMessage createdAt */
                        createdAt?: (google.protobuf.ITimestamp|null);

                        /** ChatMessage mediaList */
                        mediaList?: (social.mixi.application.model.v1.IMedia[]|null);

                        /** ChatMessage postId */
                        postId?: (string|null);
                    }

                    /** Represents a ChatMessage. */
                    class ChatMessage implements IChatMessage {

                        /**
                         * Constructs a new ChatMessage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IChatMessage);

                        /** ChatMessage roomId. */
                        public roomId: string;

                        /** ChatMessage messageId. */
                        public messageId: string;

                        /** ChatMessage creatorId. */
                        public creatorId: string;

                        /** ChatMessage text. */
                        public text: string;

                        /** ChatMessage createdAt. */
                        public createdAt?: (google.protobuf.ITimestamp|null);

                        /** ChatMessage mediaList. */
                        public mediaList: social.mixi.application.model.v1.IMedia[];

                        /** ChatMessage postId. */
                        public postId?: (string|null);

                        /**
                         * Creates a new ChatMessage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChatMessage instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IChatMessage): social.mixi.application.model.v1.ChatMessage;

                        /**
                         * Encodes the specified ChatMessage message. Does not implicitly {@link social.mixi.application.model.v1.ChatMessage.verify|verify} messages.
                         * @param message ChatMessage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChatMessage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChatMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.ChatMessage;

                        /**
                         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChatMessage
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.ChatMessage;

                        /**
                         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
                         * @param message ChatMessage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChatMessage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Media. */
                    interface IMedia {

                        /** Media mediaType */
                        mediaType?: (social.mixi.application.const_.v1.MediaType|null);

                        /** Media image */
                        image?: (social.mixi.application.model.v1.IMediaImage|null);

                        /** Media video */
                        video?: (social.mixi.application.model.v1.IMediaVideo|null);
                    }

                    /** Represents a Media. */
                    class Media implements IMedia {

                        /**
                         * Constructs a new Media.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IMedia);

                        /** Media mediaType. */
                        public mediaType: social.mixi.application.const_.v1.MediaType;

                        /** Media image. */
                        public image?: (social.mixi.application.model.v1.IMediaImage|null);

                        /** Media video. */
                        public video?: (social.mixi.application.model.v1.IMediaVideo|null);

                        /** Media content. */
                        public content?: ("image"|"video");

                        /**
                         * Creates a new Media instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Media instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IMedia): social.mixi.application.model.v1.Media;

                        /**
                         * Encodes the specified Media message. Does not implicitly {@link social.mixi.application.model.v1.Media.verify|verify} messages.
                         * @param message Media message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Media message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Media
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.Media;

                        /**
                         * Creates a Media message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Media
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.Media;

                        /**
                         * Creates a plain object from a Media message. Also converts values to other types if specified.
                         * @param message Media
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.Media, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Media to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MediaImage. */
                    interface IMediaImage {

                        /** MediaImage largeImageUrl */
                        largeImageUrl?: (string|null);

                        /** MediaImage largeImageMimeType */
                        largeImageMimeType?: (string|null);

                        /** MediaImage largeImageHeight */
                        largeImageHeight?: (number|null);

                        /** MediaImage largeImageWidth */
                        largeImageWidth?: (number|null);

                        /** MediaImage smallImageUrl */
                        smallImageUrl?: (string|null);

                        /** MediaImage smallImageMimeType */
                        smallImageMimeType?: (string|null);

                        /** MediaImage smallImageHeight */
                        smallImageHeight?: (number|null);

                        /** MediaImage smallImageWidth */
                        smallImageWidth?: (number|null);
                    }

                    /** Represents a MediaImage. */
                    class MediaImage implements IMediaImage {

                        /**
                         * Constructs a new MediaImage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IMediaImage);

                        /** MediaImage largeImageUrl. */
                        public largeImageUrl: string;

                        /** MediaImage largeImageMimeType. */
                        public largeImageMimeType: string;

                        /** MediaImage largeImageHeight. */
                        public largeImageHeight: number;

                        /** MediaImage largeImageWidth. */
                        public largeImageWidth: number;

                        /** MediaImage smallImageUrl. */
                        public smallImageUrl: string;

                        /** MediaImage smallImageMimeType. */
                        public smallImageMimeType: string;

                        /** MediaImage smallImageHeight. */
                        public smallImageHeight: number;

                        /** MediaImage smallImageWidth. */
                        public smallImageWidth: number;

                        /**
                         * Creates a new MediaImage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MediaImage instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IMediaImage): social.mixi.application.model.v1.MediaImage;

                        /**
                         * Encodes the specified MediaImage message. Does not implicitly {@link social.mixi.application.model.v1.MediaImage.verify|verify} messages.
                         * @param message MediaImage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IMediaImage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MediaImage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MediaImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.MediaImage;

                        /**
                         * Creates a MediaImage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MediaImage
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.MediaImage;

                        /**
                         * Creates a plain object from a MediaImage message. Also converts values to other types if specified.
                         * @param message MediaImage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.MediaImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MediaImage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MediaVideo. */
                    interface IMediaVideo {

                        /** MediaVideo videoUrl */
                        videoUrl?: (string|null);

                        /** MediaVideo videoMimeType */
                        videoMimeType?: (string|null);

                        /** MediaVideo videoHeight */
                        videoHeight?: (number|null);

                        /** MediaVideo videoWidth */
                        videoWidth?: (number|null);

                        /** MediaVideo previewImageUrl */
                        previewImageUrl?: (string|null);

                        /** MediaVideo previewImageMimeType */
                        previewImageMimeType?: (string|null);

                        /** MediaVideo previewImageHeight */
                        previewImageHeight?: (number|null);

                        /** MediaVideo previewImageWidth */
                        previewImageWidth?: (number|null);

                        /** MediaVideo duration */
                        duration?: (number|null);
                    }

                    /** Represents a MediaVideo. */
                    class MediaVideo implements IMediaVideo {

                        /**
                         * Constructs a new MediaVideo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IMediaVideo);

                        /** MediaVideo videoUrl. */
                        public videoUrl: string;

                        /** MediaVideo videoMimeType. */
                        public videoMimeType: string;

                        /** MediaVideo videoHeight. */
                        public videoHeight: number;

                        /** MediaVideo videoWidth. */
                        public videoWidth: number;

                        /** MediaVideo previewImageUrl. */
                        public previewImageUrl: string;

                        /** MediaVideo previewImageMimeType. */
                        public previewImageMimeType: string;

                        /** MediaVideo previewImageHeight. */
                        public previewImageHeight: number;

                        /** MediaVideo previewImageWidth. */
                        public previewImageWidth: number;

                        /** MediaVideo duration. */
                        public duration: number;

                        /**
                         * Creates a new MediaVideo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MediaVideo instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IMediaVideo): social.mixi.application.model.v1.MediaVideo;

                        /**
                         * Encodes the specified MediaVideo message. Does not implicitly {@link social.mixi.application.model.v1.MediaVideo.verify|verify} messages.
                         * @param message MediaVideo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IMediaVideo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MediaVideo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MediaVideo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.MediaVideo;

                        /**
                         * Creates a MediaVideo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MediaVideo
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.MediaVideo;

                        /**
                         * Creates a plain object from a MediaVideo message. Also converts values to other types if specified.
                         * @param message MediaVideo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.MediaVideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MediaVideo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a MediaStamp. */
                    interface IMediaStamp {

                        /** MediaStamp url */
                        url?: (string|null);

                        /** MediaStamp mimeType */
                        mimeType?: (string|null);

                        /** MediaStamp height */
                        height?: (number|null);

                        /** MediaStamp width */
                        width?: (number|null);
                    }

                    /** Represents a MediaStamp. */
                    class MediaStamp implements IMediaStamp {

                        /**
                         * Constructs a new MediaStamp.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IMediaStamp);

                        /** MediaStamp url. */
                        public url: string;

                        /** MediaStamp mimeType. */
                        public mimeType: string;

                        /** MediaStamp height. */
                        public height: number;

                        /** MediaStamp width. */
                        public width: number;

                        /**
                         * Creates a new MediaStamp instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MediaStamp instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IMediaStamp): social.mixi.application.model.v1.MediaStamp;

                        /**
                         * Encodes the specified MediaStamp message. Does not implicitly {@link social.mixi.application.model.v1.MediaStamp.verify|verify} messages.
                         * @param message MediaStamp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IMediaStamp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MediaStamp message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MediaStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.MediaStamp;

                        /**
                         * Creates a MediaStamp message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MediaStamp
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.MediaStamp;

                        /**
                         * Creates a plain object from a MediaStamp message. Also converts values to other types if specified.
                         * @param message MediaStamp
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.MediaStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MediaStamp to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Post. */
                    interface IPost {

                        /** Post postId */
                        postId?: (string|null);

                        /** Post isDeleted */
                        isDeleted?: (boolean|null);

                        /** Post creatorId */
                        creatorId?: (string|null);

                        /** Post text */
                        text?: (string|null);

                        /** Post createdAt */
                        createdAt?: (google.protobuf.ITimestamp|null);

                        /** Post postMediaList */
                        postMediaList?: (social.mixi.application.model.v1.IPostMedia[]|null);

                        /** Post inReplyToPostId */
                        inReplyToPostId?: (string|null);

                        /** Post postMask */
                        postMask?: (social.mixi.application.model.v1.IPostMask|null);

                        /** Post communityId */
                        communityId?: (string|null);

                        /** Post visibility */
                        visibility?: (social.mixi.application.const_.v1.PostVisibility|null);

                        /** Post accessLevel */
                        accessLevel?: (social.mixi.application.const_.v1.PostAccessLevel|null);

                        /** Post stamps */
                        stamps?: (social.mixi.application.model.v1.IPostStamp[]|null);

                        /** Post readerStampId */
                        readerStampId?: (string|null);
                    }

                    /** Represents a Post. */
                    class Post implements IPost {

                        /**
                         * Constructs a new Post.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPost);

                        /** Post postId. */
                        public postId: string;

                        /** Post isDeleted. */
                        public isDeleted: boolean;

                        /** Post creatorId. */
                        public creatorId: string;

                        /** Post text. */
                        public text: string;

                        /** Post createdAt. */
                        public createdAt?: (google.protobuf.ITimestamp|null);

                        /** Post postMediaList. */
                        public postMediaList: social.mixi.application.model.v1.IPostMedia[];

                        /** Post inReplyToPostId. */
                        public inReplyToPostId?: (string|null);

                        /** Post postMask. */
                        public postMask?: (social.mixi.application.model.v1.IPostMask|null);

                        /** Post communityId. */
                        public communityId?: (string|null);

                        /** Post visibility. */
                        public visibility: social.mixi.application.const_.v1.PostVisibility;

                        /** Post accessLevel. */
                        public accessLevel: social.mixi.application.const_.v1.PostAccessLevel;

                        /** Post stamps. */
                        public stamps: social.mixi.application.model.v1.IPostStamp[];

                        /** Post readerStampId. */
                        public readerStampId?: (string|null);

                        /**
                         * Creates a new Post instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Post instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPost): social.mixi.application.model.v1.Post;

                        /**
                         * Encodes the specified Post message. Does not implicitly {@link social.mixi.application.model.v1.Post.verify|verify} messages.
                         * @param message Post message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPost, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Post message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Post
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.Post;

                        /**
                         * Creates a Post message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Post
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.Post;

                        /**
                         * Creates a plain object from a Post message. Also converts values to other types if specified.
                         * @param message Post
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.Post, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Post to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostMedia. */
                    interface IPostMedia {

                        /** PostMedia mediaType */
                        mediaType?: (social.mixi.application.const_.v1.PostMediaType|null);

                        /** PostMedia image */
                        image?: (social.mixi.application.model.v1.IPostMediaImage|null);

                        /** PostMedia video */
                        video?: (social.mixi.application.model.v1.IPostMediaVideo|null);
                    }

                    /** Represents a PostMedia. */
                    class PostMedia implements IPostMedia {

                        /**
                         * Constructs a new PostMedia.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPostMedia);

                        /** PostMedia mediaType. */
                        public mediaType: social.mixi.application.const_.v1.PostMediaType;

                        /** PostMedia image. */
                        public image?: (social.mixi.application.model.v1.IPostMediaImage|null);

                        /** PostMedia video. */
                        public video?: (social.mixi.application.model.v1.IPostMediaVideo|null);

                        /** PostMedia content. */
                        public content?: ("image"|"video");

                        /**
                         * Creates a new PostMedia instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostMedia instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPostMedia): social.mixi.application.model.v1.PostMedia;

                        /**
                         * Encodes the specified PostMedia message. Does not implicitly {@link social.mixi.application.model.v1.PostMedia.verify|verify} messages.
                         * @param message PostMedia message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPostMedia, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostMedia message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostMedia
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PostMedia;

                        /**
                         * Creates a PostMedia message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostMedia
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PostMedia;

                        /**
                         * Creates a plain object from a PostMedia message. Also converts values to other types if specified.
                         * @param message PostMedia
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PostMedia, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostMedia to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostMediaImage. */
                    interface IPostMediaImage {

                        /** PostMediaImage largeImageUrl */
                        largeImageUrl?: (string|null);

                        /** PostMediaImage largeImageMimeType */
                        largeImageMimeType?: (string|null);

                        /** PostMediaImage largeImageHeight */
                        largeImageHeight?: (number|null);

                        /** PostMediaImage largeImageWidth */
                        largeImageWidth?: (number|null);

                        /** PostMediaImage smallImageUrl */
                        smallImageUrl?: (string|null);

                        /** PostMediaImage smallImageMimeType */
                        smallImageMimeType?: (string|null);

                        /** PostMediaImage smallImageHeight */
                        smallImageHeight?: (number|null);

                        /** PostMediaImage smallImageWidth */
                        smallImageWidth?: (number|null);
                    }

                    /** Represents a PostMediaImage. */
                    class PostMediaImage implements IPostMediaImage {

                        /**
                         * Constructs a new PostMediaImage.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPostMediaImage);

                        /** PostMediaImage largeImageUrl. */
                        public largeImageUrl: string;

                        /** PostMediaImage largeImageMimeType. */
                        public largeImageMimeType: string;

                        /** PostMediaImage largeImageHeight. */
                        public largeImageHeight: number;

                        /** PostMediaImage largeImageWidth. */
                        public largeImageWidth: number;

                        /** PostMediaImage smallImageUrl. */
                        public smallImageUrl: string;

                        /** PostMediaImage smallImageMimeType. */
                        public smallImageMimeType: string;

                        /** PostMediaImage smallImageHeight. */
                        public smallImageHeight: number;

                        /** PostMediaImage smallImageWidth. */
                        public smallImageWidth: number;

                        /**
                         * Creates a new PostMediaImage instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostMediaImage instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPostMediaImage): social.mixi.application.model.v1.PostMediaImage;

                        /**
                         * Encodes the specified PostMediaImage message. Does not implicitly {@link social.mixi.application.model.v1.PostMediaImage.verify|verify} messages.
                         * @param message PostMediaImage message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPostMediaImage, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostMediaImage message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostMediaImage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PostMediaImage;

                        /**
                         * Creates a PostMediaImage message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostMediaImage
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PostMediaImage;

                        /**
                         * Creates a plain object from a PostMediaImage message. Also converts values to other types if specified.
                         * @param message PostMediaImage
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PostMediaImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostMediaImage to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostMediaVideo. */
                    interface IPostMediaVideo {

                        /** PostMediaVideo videoUrl */
                        videoUrl?: (string|null);

                        /** PostMediaVideo videoMimeType */
                        videoMimeType?: (string|null);

                        /** PostMediaVideo videoHeight */
                        videoHeight?: (number|null);

                        /** PostMediaVideo videoWidth */
                        videoWidth?: (number|null);

                        /** PostMediaVideo previewImageUrl */
                        previewImageUrl?: (string|null);

                        /** PostMediaVideo previewImageMimeType */
                        previewImageMimeType?: (string|null);

                        /** PostMediaVideo previewImageHeight */
                        previewImageHeight?: (number|null);

                        /** PostMediaVideo previewImageWidth */
                        previewImageWidth?: (number|null);

                        /** PostMediaVideo duration */
                        duration?: (number|null);
                    }

                    /** Represents a PostMediaVideo. */
                    class PostMediaVideo implements IPostMediaVideo {

                        /**
                         * Constructs a new PostMediaVideo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPostMediaVideo);

                        /** PostMediaVideo videoUrl. */
                        public videoUrl: string;

                        /** PostMediaVideo videoMimeType. */
                        public videoMimeType: string;

                        /** PostMediaVideo videoHeight. */
                        public videoHeight: number;

                        /** PostMediaVideo videoWidth. */
                        public videoWidth: number;

                        /** PostMediaVideo previewImageUrl. */
                        public previewImageUrl: string;

                        /** PostMediaVideo previewImageMimeType. */
                        public previewImageMimeType: string;

                        /** PostMediaVideo previewImageHeight. */
                        public previewImageHeight: number;

                        /** PostMediaVideo previewImageWidth. */
                        public previewImageWidth: number;

                        /** PostMediaVideo duration. */
                        public duration: number;

                        /**
                         * Creates a new PostMediaVideo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostMediaVideo instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPostMediaVideo): social.mixi.application.model.v1.PostMediaVideo;

                        /**
                         * Encodes the specified PostMediaVideo message. Does not implicitly {@link social.mixi.application.model.v1.PostMediaVideo.verify|verify} messages.
                         * @param message PostMediaVideo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPostMediaVideo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostMediaVideo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostMediaVideo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PostMediaVideo;

                        /**
                         * Creates a PostMediaVideo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostMediaVideo
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PostMediaVideo;

                        /**
                         * Creates a plain object from a PostMediaVideo message. Also converts values to other types if specified.
                         * @param message PostMediaVideo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PostMediaVideo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostMediaVideo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostMask. */
                    interface IPostMask {

                        /** PostMask maskType */
                        maskType?: (social.mixi.application.const_.v1.PostMaskType|null);

                        /** PostMask caption */
                        caption?: (string|null);
                    }

                    /** Represents a PostMask. */
                    class PostMask implements IPostMask {

                        /**
                         * Constructs a new PostMask.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPostMask);

                        /** PostMask maskType. */
                        public maskType: social.mixi.application.const_.v1.PostMaskType;

                        /** PostMask caption. */
                        public caption: string;

                        /**
                         * Creates a new PostMask instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostMask instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPostMask): social.mixi.application.model.v1.PostMask;

                        /**
                         * Encodes the specified PostMask message. Does not implicitly {@link social.mixi.application.model.v1.PostMask.verify|verify} messages.
                         * @param message PostMask message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPostMask, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostMask message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostMask
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PostMask;

                        /**
                         * Creates a PostMask message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostMask
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PostMask;

                        /**
                         * Creates a plain object from a PostMask message. Also converts values to other types if specified.
                         * @param message PostMask
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PostMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostMask to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostStamp. */
                    interface IPostStamp {

                        /** PostStamp stamp */
                        stamp?: (social.mixi.application.model.v1.IMediaStamp|null);

                        /** PostStamp count */
                        count?: (number|Long|null);
                    }

                    /** Represents a PostStamp. */
                    class PostStamp implements IPostStamp {

                        /**
                         * Constructs a new PostStamp.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPostStamp);

                        /** PostStamp stamp. */
                        public stamp?: (social.mixi.application.model.v1.IMediaStamp|null);

                        /** PostStamp count. */
                        public count: (number|Long);

                        /**
                         * Creates a new PostStamp instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostStamp instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPostStamp): social.mixi.application.model.v1.PostStamp;

                        /**
                         * Encodes the specified PostStamp message. Does not implicitly {@link social.mixi.application.model.v1.PostStamp.verify|verify} messages.
                         * @param message PostStamp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPostStamp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostStamp message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PostStamp;

                        /**
                         * Creates a PostStamp message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostStamp
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PostStamp;

                        /**
                         * Creates a plain object from a PostStamp message. Also converts values to other types if specified.
                         * @param message PostStamp
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PostStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostStamp to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an OfficialStampSet. */
                    interface IOfficialStampSet {

                        /** OfficialStampSet name */
                        name?: (string|null);

                        /** OfficialStampSet spriteUrl */
                        spriteUrl?: (string|null);

                        /** OfficialStampSet stamps */
                        stamps?: (social.mixi.application.model.v1.IOfficialStamp[]|null);

                        /** OfficialStampSet stampSetId */
                        stampSetId?: (string|null);

                        /** OfficialStampSet startAt */
                        startAt?: (google.protobuf.ITimestamp|null);

                        /** OfficialStampSet endAt */
                        endAt?: (google.protobuf.ITimestamp|null);

                        /** OfficialStampSet stampSetType */
                        stampSetType?: (social.mixi.application.const_.v1.StampSetType|null);
                    }

                    /** Represents an OfficialStampSet. */
                    class OfficialStampSet implements IOfficialStampSet {

                        /**
                         * Constructs a new OfficialStampSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IOfficialStampSet);

                        /** OfficialStampSet name. */
                        public name: string;

                        /** OfficialStampSet spriteUrl. */
                        public spriteUrl: string;

                        /** OfficialStampSet stamps. */
                        public stamps: social.mixi.application.model.v1.IOfficialStamp[];

                        /** OfficialStampSet stampSetId. */
                        public stampSetId: string;

                        /** OfficialStampSet startAt. */
                        public startAt?: (google.protobuf.ITimestamp|null);

                        /** OfficialStampSet endAt. */
                        public endAt?: (google.protobuf.ITimestamp|null);

                        /** OfficialStampSet stampSetType. */
                        public stampSetType: social.mixi.application.const_.v1.StampSetType;

                        /**
                         * Creates a new OfficialStampSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OfficialStampSet instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IOfficialStampSet): social.mixi.application.model.v1.OfficialStampSet;

                        /**
                         * Encodes the specified OfficialStampSet message. Does not implicitly {@link social.mixi.application.model.v1.OfficialStampSet.verify|verify} messages.
                         * @param message OfficialStampSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IOfficialStampSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OfficialStampSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OfficialStampSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.OfficialStampSet;

                        /**
                         * Creates an OfficialStampSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OfficialStampSet
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.OfficialStampSet;

                        /**
                         * Creates a plain object from an OfficialStampSet message. Also converts values to other types if specified.
                         * @param message OfficialStampSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.OfficialStampSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OfficialStampSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an OfficialStamp. */
                    interface IOfficialStamp {

                        /** OfficialStamp stampId */
                        stampId?: (string|null);

                        /** OfficialStamp index */
                        index?: (number|null);

                        /** OfficialStamp searchTags */
                        searchTags?: (string[]|null);

                        /** OfficialStamp url */
                        url?: (string|null);
                    }

                    /** Represents an OfficialStamp. */
                    class OfficialStamp implements IOfficialStamp {

                        /**
                         * Constructs a new OfficialStamp.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IOfficialStamp);

                        /** OfficialStamp stampId. */
                        public stampId: string;

                        /** OfficialStamp index. */
                        public index: number;

                        /** OfficialStamp searchTags. */
                        public searchTags: string[];

                        /** OfficialStamp url. */
                        public url: string;

                        /**
                         * Creates a new OfficialStamp instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OfficialStamp instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IOfficialStamp): social.mixi.application.model.v1.OfficialStamp;

                        /**
                         * Encodes the specified OfficialStamp message. Does not implicitly {@link social.mixi.application.model.v1.OfficialStamp.verify|verify} messages.
                         * @param message OfficialStamp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IOfficialStamp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OfficialStamp message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OfficialStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.OfficialStamp;

                        /**
                         * Creates an OfficialStamp message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OfficialStamp
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.OfficialStamp;

                        /**
                         * Creates a plain object from an OfficialStamp message. Also converts values to other types if specified.
                         * @param message OfficialStamp
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.OfficialStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OfficialStamp to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommunityStampSet. */
                    interface ICommunityStampSet {

                        /** CommunityStampSet communityId */
                        communityId?: (string|null);

                        /** CommunityStampSet stamps */
                        stamps?: (social.mixi.application.model.v1.ICommunityStamp[]|null);
                    }

                    /** Represents a CommunityStampSet. */
                    class CommunityStampSet implements ICommunityStampSet {

                        /**
                         * Constructs a new CommunityStampSet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.ICommunityStampSet);

                        /** CommunityStampSet communityId. */
                        public communityId: string;

                        /** CommunityStampSet stamps. */
                        public stamps: social.mixi.application.model.v1.ICommunityStamp[];

                        /**
                         * Creates a new CommunityStampSet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunityStampSet instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.ICommunityStampSet): social.mixi.application.model.v1.CommunityStampSet;

                        /**
                         * Encodes the specified CommunityStampSet message. Does not implicitly {@link social.mixi.application.model.v1.CommunityStampSet.verify|verify} messages.
                         * @param message CommunityStampSet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.ICommunityStampSet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunityStampSet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunityStampSet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.CommunityStampSet;

                        /**
                         * Creates a CommunityStampSet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunityStampSet
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.CommunityStampSet;

                        /**
                         * Creates a plain object from a CommunityStampSet message. Also converts values to other types if specified.
                         * @param message CommunityStampSet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.CommunityStampSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunityStampSet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommunityStamp. */
                    interface ICommunityStamp {

                        /** CommunityStamp stampId */
                        stampId?: (string|null);

                        /** CommunityStamp url */
                        url?: (string|null);

                        /** CommunityStamp searchTags */
                        searchTags?: (string[]|null);
                    }

                    /** Represents a CommunityStamp. */
                    class CommunityStamp implements ICommunityStamp {

                        /**
                         * Constructs a new CommunityStamp.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.ICommunityStamp);

                        /** CommunityStamp stampId. */
                        public stampId: string;

                        /** CommunityStamp url. */
                        public url: string;

                        /** CommunityStamp searchTags. */
                        public searchTags: string[];

                        /**
                         * Creates a new CommunityStamp instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunityStamp instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.ICommunityStamp): social.mixi.application.model.v1.CommunityStamp;

                        /**
                         * Encodes the specified CommunityStamp message. Does not implicitly {@link social.mixi.application.model.v1.CommunityStamp.verify|verify} messages.
                         * @param message CommunityStamp message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.ICommunityStamp, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunityStamp message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunityStamp
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.CommunityStamp;

                        /**
                         * Creates a CommunityStamp message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunityStamp
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.CommunityStamp;

                        /**
                         * Creates a plain object from a CommunityStamp message. Also converts values to other types if specified.
                         * @param message CommunityStamp
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.CommunityStamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunityStamp to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a User. */
                    interface IUser {

                        /** User userId */
                        userId?: (string|null);

                        /** User isDisabled */
                        isDisabled?: (boolean|null);

                        /** User name */
                        name?: (string|null);

                        /** User displayName */
                        displayName?: (string|null);

                        /** User profile */
                        profile?: (string|null);

                        /** User userAvatar */
                        userAvatar?: (social.mixi.application.model.v1.IUserAvatar|null);

                        /** User visibility */
                        visibility?: (social.mixi.application.const_.v1.UserVisibility|null);

                        /** User accessLevel */
                        accessLevel?: (social.mixi.application.const_.v1.UserAccessLevel|null);
                    }

                    /** Represents a User. */
                    class User implements IUser {

                        /**
                         * Constructs a new User.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IUser);

                        /** User userId. */
                        public userId: string;

                        /** User isDisabled. */
                        public isDisabled: boolean;

                        /** User name. */
                        public name: string;

                        /** User displayName. */
                        public displayName: string;

                        /** User profile. */
                        public profile: string;

                        /** User userAvatar. */
                        public userAvatar?: (social.mixi.application.model.v1.IUserAvatar|null);

                        /** User visibility. */
                        public visibility: social.mixi.application.const_.v1.UserVisibility;

                        /** User accessLevel. */
                        public accessLevel: social.mixi.application.const_.v1.UserAccessLevel;

                        /**
                         * Creates a new User instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns User instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IUser): social.mixi.application.model.v1.User;

                        /**
                         * Encodes the specified User message. Does not implicitly {@link social.mixi.application.model.v1.User.verify|verify} messages.
                         * @param message User message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a User message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns User
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.User;

                        /**
                         * Creates a User message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns User
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.User;

                        /**
                         * Creates a plain object from a User message. Also converts values to other types if specified.
                         * @param message User
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this User to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a UserAvatar. */
                    interface IUserAvatar {

                        /** UserAvatar largeImageUrl */
                        largeImageUrl?: (string|null);

                        /** UserAvatar largeImageMimeType */
                        largeImageMimeType?: (string|null);

                        /** UserAvatar largeImageHeight */
                        largeImageHeight?: (number|null);

                        /** UserAvatar largeImageWidth */
                        largeImageWidth?: (number|null);

                        /** UserAvatar smallImageUrl */
                        smallImageUrl?: (string|null);

                        /** UserAvatar smallImageMimeType */
                        smallImageMimeType?: (string|null);

                        /** UserAvatar smallImageHeight */
                        smallImageHeight?: (number|null);

                        /** UserAvatar smallImageWidth */
                        smallImageWidth?: (number|null);
                    }

                    /** Represents a UserAvatar. */
                    class UserAvatar implements IUserAvatar {

                        /**
                         * Constructs a new UserAvatar.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IUserAvatar);

                        /** UserAvatar largeImageUrl. */
                        public largeImageUrl: string;

                        /** UserAvatar largeImageMimeType. */
                        public largeImageMimeType: string;

                        /** UserAvatar largeImageHeight. */
                        public largeImageHeight: number;

                        /** UserAvatar largeImageWidth. */
                        public largeImageWidth: number;

                        /** UserAvatar smallImageUrl. */
                        public smallImageUrl: string;

                        /** UserAvatar smallImageMimeType. */
                        public smallImageMimeType: string;

                        /** UserAvatar smallImageHeight. */
                        public smallImageHeight: number;

                        /** UserAvatar smallImageWidth. */
                        public smallImageWidth: number;

                        /**
                         * Creates a new UserAvatar instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserAvatar instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IUserAvatar): social.mixi.application.model.v1.UserAvatar;

                        /**
                         * Encodes the specified UserAvatar message. Does not implicitly {@link social.mixi.application.model.v1.UserAvatar.verify|verify} messages.
                         * @param message UserAvatar message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IUserAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserAvatar message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserAvatar
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.UserAvatar;

                        /**
                         * Creates a UserAvatar message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserAvatar
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.UserAvatar;

                        /**
                         * Creates a plain object from a UserAvatar message. Also converts values to other types if specified.
                         * @param message UserAvatar
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.UserAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserAvatar to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Event. */
                    interface IEvent {

                        /** Event eventId */
                        eventId?: (string|null);

                        /** Event eventType */
                        eventType?: (social.mixi.application.const_.v1.EventType|null);

                        /** Event pingEvent */
                        pingEvent?: (social.mixi.application.model.v1.IPingEvent|null);

                        /** Event postCreatedEvent */
                        postCreatedEvent?: (social.mixi.application.model.v1.IPostCreatedEvent|null);

                        /** Event communityMemberChangedEvent */
                        communityMemberChangedEvent?: (social.mixi.application.model.v1.ICommunityMemberChangedEvent|null);

                        /** Event chatMessageReceivedEvent */
                        chatMessageReceivedEvent?: (social.mixi.application.model.v1.IChatMessageReceivedEvent|null);

                        /** Event communityPluginManagedEvent */
                        communityPluginManagedEvent?: (social.mixi.application.model.v1.ICommunityPluginManagedEvent|null);
                    }

                    /** Represents an Event. */
                    class Event implements IEvent {

                        /**
                         * Constructs a new Event.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IEvent);

                        /** Event eventId. */
                        public eventId: string;

                        /** Event eventType. */
                        public eventType: social.mixi.application.const_.v1.EventType;

                        /** Event pingEvent. */
                        public pingEvent?: (social.mixi.application.model.v1.IPingEvent|null);

                        /** Event postCreatedEvent. */
                        public postCreatedEvent?: (social.mixi.application.model.v1.IPostCreatedEvent|null);

                        /** Event communityMemberChangedEvent. */
                        public communityMemberChangedEvent?: (social.mixi.application.model.v1.ICommunityMemberChangedEvent|null);

                        /** Event chatMessageReceivedEvent. */
                        public chatMessageReceivedEvent?: (social.mixi.application.model.v1.IChatMessageReceivedEvent|null);

                        /** Event communityPluginManagedEvent. */
                        public communityPluginManagedEvent?: (social.mixi.application.model.v1.ICommunityPluginManagedEvent|null);

                        /** Event body. */
                        public body?: ("pingEvent"|"postCreatedEvent"|"communityMemberChangedEvent"|"chatMessageReceivedEvent"|"communityPluginManagedEvent");

                        /**
                         * Creates a new Event instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Event instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IEvent): social.mixi.application.model.v1.Event;

                        /**
                         * Encodes the specified Event message. Does not implicitly {@link social.mixi.application.model.v1.Event.verify|verify} messages.
                         * @param message Event message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Event message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Event
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.Event;

                        /**
                         * Creates an Event message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Event
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.Event;

                        /**
                         * Creates a plain object from an Event message. Also converts values to other types if specified.
                         * @param message Event
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Event to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PingEvent. */
                    interface IPingEvent {
                    }

                    /** Represents a PingEvent. */
                    class PingEvent implements IPingEvent {

                        /**
                         * Constructs a new PingEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPingEvent);

                        /**
                         * Creates a new PingEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PingEvent instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPingEvent): social.mixi.application.model.v1.PingEvent;

                        /**
                         * Encodes the specified PingEvent message. Does not implicitly {@link social.mixi.application.model.v1.PingEvent.verify|verify} messages.
                         * @param message PingEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPingEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PingEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PingEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PingEvent;

                        /**
                         * Creates a PingEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PingEvent
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PingEvent;

                        /**
                         * Creates a plain object from a PingEvent message. Also converts values to other types if specified.
                         * @param message PingEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PingEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PingEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a PostCreatedEvent. */
                    interface IPostCreatedEvent {

                        /** PostCreatedEvent eventReasonList */
                        eventReasonList?: (social.mixi.application.const_.v1.EventReason[]|null);

                        /** PostCreatedEvent post */
                        post?: (social.mixi.application.model.v1.IPost|null);

                        /** PostCreatedEvent issuer */
                        issuer?: (social.mixi.application.model.v1.IUser|null);

                        /** PostCreatedEvent postedCommunity */
                        postedCommunity?: (social.mixi.application.model.v1.ICommunity|null);
                    }

                    /** Represents a PostCreatedEvent. */
                    class PostCreatedEvent implements IPostCreatedEvent {

                        /**
                         * Constructs a new PostCreatedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IPostCreatedEvent);

                        /** PostCreatedEvent eventReasonList. */
                        public eventReasonList: social.mixi.application.const_.v1.EventReason[];

                        /** PostCreatedEvent post. */
                        public post?: (social.mixi.application.model.v1.IPost|null);

                        /** PostCreatedEvent issuer. */
                        public issuer?: (social.mixi.application.model.v1.IUser|null);

                        /** PostCreatedEvent postedCommunity. */
                        public postedCommunity?: (social.mixi.application.model.v1.ICommunity|null);

                        /**
                         * Creates a new PostCreatedEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostCreatedEvent instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IPostCreatedEvent): social.mixi.application.model.v1.PostCreatedEvent;

                        /**
                         * Encodes the specified PostCreatedEvent message. Does not implicitly {@link social.mixi.application.model.v1.PostCreatedEvent.verify|verify} messages.
                         * @param message PostCreatedEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IPostCreatedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostCreatedEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostCreatedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.PostCreatedEvent;

                        /**
                         * Creates a PostCreatedEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostCreatedEvent
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.PostCreatedEvent;

                        /**
                         * Creates a plain object from a PostCreatedEvent message. Also converts values to other types if specified.
                         * @param message PostCreatedEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.PostCreatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostCreatedEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommunityMemberChangedEvent. */
                    interface ICommunityMemberChangedEvent {

                        /** CommunityMemberChangedEvent eventReasonList */
                        eventReasonList?: (social.mixi.application.const_.v1.EventReason[]|null);

                        /** CommunityMemberChangedEvent member */
                        member?: (social.mixi.application.model.v1.IUser|null);

                        /** CommunityMemberChangedEvent community */
                        community?: (social.mixi.application.model.v1.ICommunity|null);
                    }

                    /** Represents a CommunityMemberChangedEvent. */
                    class CommunityMemberChangedEvent implements ICommunityMemberChangedEvent {

                        /**
                         * Constructs a new CommunityMemberChangedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.ICommunityMemberChangedEvent);

                        /** CommunityMemberChangedEvent eventReasonList. */
                        public eventReasonList: social.mixi.application.const_.v1.EventReason[];

                        /** CommunityMemberChangedEvent member. */
                        public member?: (social.mixi.application.model.v1.IUser|null);

                        /** CommunityMemberChangedEvent community. */
                        public community?: (social.mixi.application.model.v1.ICommunity|null);

                        /**
                         * Creates a new CommunityMemberChangedEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunityMemberChangedEvent instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.ICommunityMemberChangedEvent): social.mixi.application.model.v1.CommunityMemberChangedEvent;

                        /**
                         * Encodes the specified CommunityMemberChangedEvent message. Does not implicitly {@link social.mixi.application.model.v1.CommunityMemberChangedEvent.verify|verify} messages.
                         * @param message CommunityMemberChangedEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.ICommunityMemberChangedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunityMemberChangedEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunityMemberChangedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.CommunityMemberChangedEvent;

                        /**
                         * Creates a CommunityMemberChangedEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunityMemberChangedEvent
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.CommunityMemberChangedEvent;

                        /**
                         * Creates a plain object from a CommunityMemberChangedEvent message. Also converts values to other types if specified.
                         * @param message CommunityMemberChangedEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.CommunityMemberChangedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunityMemberChangedEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a ChatMessageReceivedEvent. */
                    interface IChatMessageReceivedEvent {

                        /** ChatMessageReceivedEvent eventReasonList */
                        eventReasonList?: (social.mixi.application.const_.v1.EventReason[]|null);

                        /** ChatMessageReceivedEvent message */
                        message?: (social.mixi.application.model.v1.IChatMessage|null);

                        /** ChatMessageReceivedEvent issuer */
                        issuer?: (social.mixi.application.model.v1.IUser|null);
                    }

                    /** Represents a ChatMessageReceivedEvent. */
                    class ChatMessageReceivedEvent implements IChatMessageReceivedEvent {

                        /**
                         * Constructs a new ChatMessageReceivedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.IChatMessageReceivedEvent);

                        /** ChatMessageReceivedEvent eventReasonList. */
                        public eventReasonList: social.mixi.application.const_.v1.EventReason[];

                        /** ChatMessageReceivedEvent message. */
                        public message?: (social.mixi.application.model.v1.IChatMessage|null);

                        /** ChatMessageReceivedEvent issuer. */
                        public issuer?: (social.mixi.application.model.v1.IUser|null);

                        /**
                         * Creates a new ChatMessageReceivedEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ChatMessageReceivedEvent instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.IChatMessageReceivedEvent): social.mixi.application.model.v1.ChatMessageReceivedEvent;

                        /**
                         * Encodes the specified ChatMessageReceivedEvent message. Does not implicitly {@link social.mixi.application.model.v1.ChatMessageReceivedEvent.verify|verify} messages.
                         * @param message ChatMessageReceivedEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.IChatMessageReceivedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ChatMessageReceivedEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ChatMessageReceivedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.ChatMessageReceivedEvent;

                        /**
                         * Creates a ChatMessageReceivedEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ChatMessageReceivedEvent
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.ChatMessageReceivedEvent;

                        /**
                         * Creates a plain object from a ChatMessageReceivedEvent message. Also converts values to other types if specified.
                         * @param message ChatMessageReceivedEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.ChatMessageReceivedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ChatMessageReceivedEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a CommunityPluginManagedEvent. */
                    interface ICommunityPluginManagedEvent {

                        /** CommunityPluginManagedEvent eventReasonList */
                        eventReasonList?: (social.mixi.application.const_.v1.EventReason[]|null);

                        /** CommunityPluginManagedEvent community */
                        community?: (social.mixi.application.model.v1.ICommunity|null);
                    }

                    /** Represents a CommunityPluginManagedEvent. */
                    class CommunityPluginManagedEvent implements ICommunityPluginManagedEvent {

                        /**
                         * Constructs a new CommunityPluginManagedEvent.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: social.mixi.application.model.v1.ICommunityPluginManagedEvent);

                        /** CommunityPluginManagedEvent eventReasonList. */
                        public eventReasonList: social.mixi.application.const_.v1.EventReason[];

                        /** CommunityPluginManagedEvent community. */
                        public community?: (social.mixi.application.model.v1.ICommunity|null);

                        /**
                         * Creates a new CommunityPluginManagedEvent instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunityPluginManagedEvent instance
                         */
                        public static create(properties?: social.mixi.application.model.v1.ICommunityPluginManagedEvent): social.mixi.application.model.v1.CommunityPluginManagedEvent;

                        /**
                         * Encodes the specified CommunityPluginManagedEvent message. Does not implicitly {@link social.mixi.application.model.v1.CommunityPluginManagedEvent.verify|verify} messages.
                         * @param message CommunityPluginManagedEvent message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: social.mixi.application.model.v1.ICommunityPluginManagedEvent, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunityPluginManagedEvent message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunityPluginManagedEvent
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): social.mixi.application.model.v1.CommunityPluginManagedEvent;

                        /**
                         * Creates a CommunityPluginManagedEvent message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunityPluginManagedEvent
                         */
                        public static fromObject(object: { [k: string]: any }): social.mixi.application.model.v1.CommunityPluginManagedEvent;

                        /**
                         * Creates a plain object from a CommunityPluginManagedEvent message. Also converts values to other types if specified.
                         * @param message CommunityPluginManagedEvent
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: social.mixi.application.model.v1.CommunityPluginManagedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunityPluginManagedEvent to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
