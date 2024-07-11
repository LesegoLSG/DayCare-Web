package com.lesego.daycarebackend.Entity.User;
/**
 * Enumeration representing the various roles a user can have.
 * SYSTEM_ADMIN: Represents a system administrator with the highest level of privileges.
 * ADMIN: Represents an administrator with a significant level of privileges but less than SYSTEM_ADMIN.
 * CONTENT_CREATOR: Represents a user responsible for creating content.
 *
 */
public enum RoleType {
    SYSTEM_ADMIN,
    ADMIN,
    CONTENT_CREATOR

}
