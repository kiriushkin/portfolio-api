/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Return an array of tags
 *     tags:
 *       - Tags
 *     responses:
 *       '200':
 *         description: A JSON array of tags
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tags'
 *       default:
 *         description: Unexpected error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   post:
 *     summary: Create new tag
 *     tags:
 *       - Tags
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: Tag object in JSON.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tag'
 *       required: true
 *     responses:
 *       '201':
 *         description: Tag successfuly created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       '400':
 *         description: Tag name or color is missing.
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
 *     summary: Update existing tag
 *     tags:
 *       - Tags
 *     security:
 *       - TokenAuth: []
 *     requestBody:
 *       description: JSON object with an id and properties that need to be updated.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tag'
 *       required: true
 *     responses:
 *       '200':
 *         description: Tag successfuly updated.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tag'
 *       '400':
 *         description: Tag id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: Tag not found.
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
 *     summary: Delete existing tag
 *     tags:
 *       - Tags
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
 *         description: Tag successfuly deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Tag successfuly deleted.
 *       '400':
 *         description: Tag id is missing.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '404':
 *         description: Tag not found.
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
