/**
 * @swagger
 * components:
 *   schemas:
 *     Work:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         title:
 *           type: string
 *           example: Audio Platform
 *         name:
 *           type: string
 *           example: audio-platform
 *         description:
 *           type: string
 *           example: An App to listen to audio
 *         previewUrl:
 *           type: string
 *           example: https://imagehosting.com/image-id/
 *         githubLink:
 *           type: string
 *           example: https://github.com/kiriushkin/repository-name/
 *         liveLink:
 *           type: string
 *           example: https://audio-platform.netlify.app/
 *     Works:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Work'
 *     Error:
 *       type: object
 *       required:
 *         - message
 *       properties:
 *         message:
 *           type: string
 *           example: An error occured while INSERT to..
 *   securitySchemes:
 *     TokenAuth:
 *       type: http
 *       scheme: bearer
 */
