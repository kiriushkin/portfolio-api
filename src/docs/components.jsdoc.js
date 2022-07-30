/**
 * @swagger
 * components:
 *   schemas:
 *     Tag:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - color
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         name:
 *           type: string
 *           example: HTML
 *         color:
 *           type: string
 *           example: yellow
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
 *         tags:
 *           type: array
 *           items:
 *             type: integer
 *             example: 1
 *         previewUrl:
 *           type: string
 *           example: https://imagehosting.com/image-id/
 *         githubLink:
 *           type: string
 *           example: https://github.com/kiriushkin/repository-name/
 *         apiLink:
 *           type: string
 *           example: https://api.kiriushkin.pro/audio-platform/docs/
 *         liveLink:
 *           type: string
 *           example: https://audio-platform.netlify.app/
 *     Works:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Work'
 *     Tags:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/Tag'
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
