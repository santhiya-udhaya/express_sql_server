export const isAdmin = (req, res, next) => {
    // Allow only users with role 'admin'
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access only' });
    }
    next();
};