/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * Register a new user
     * Create a user account with username and password
     * @param requestBody
     * @returns any User created successfully
     * @throws ApiError
     */
    public static postApiAuthSignup(
        requestBody: {
            username: string;
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/signup',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Missing username or password`,
                500: `Server error`,
            },
        });
    }
    /**
     * Sign in existing user
     * Authenticate user with username and password
     * @param requestBody
     * @returns any Signin successful
     * @throws ApiError
     */
    public static postApiAuthSignin(
        requestBody: {
            username: string;
            password: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/signin',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials`,
                404: `User not found`,
                500: `Server error`,
            },
        });
    }
}
