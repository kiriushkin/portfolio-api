/**
 * @swagger
 * /works/{name}:
 *   get:
 *     summary: Return work object
 *     parameters:
 *       - in: path
 *         name: name
 *         schema:
 *           type: string
 *           example: audio-platform
 *         required: true
 *         description: Work name
 *     tags:
 *       - Works
 *     responses:
 *       '200':
 *         description: Work JSON object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Work'
 *       '404':
 *         description: Work not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * /works:
 *   get:
 *     summary: Return an array of works
 *     tags:
 *       - Works
 *     responses:
 *       '200':
 *         description: A JSON array of works
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Works'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   post:
 *     summary: Create new work
 *     tags:
 *       - Works
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: Work object in JSON.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Work'
 *       required: true
 *     responses:
 *       '201':
 *         description: Work successfuly created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Work'
 *       '400':
 *         description: Work title is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   put:
 *     summary: Update existing work
 *     tags:
 *       - Works
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: JSON object with an id and properties that need to be updated.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Work'
 *       required: true
 *     responses:
 *       '200':
 *         description: Work successfuly updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Work'
 *       '400':
 *         description: Work id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: Work not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   delete:
 *     summary: Delete existing work
 *     tags:
 *       - Works
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: JSON object with id property.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: ['id']
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Work successfuly deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Work successfuly deleted.
 *       '400':
 *         description: Work id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: Work not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
