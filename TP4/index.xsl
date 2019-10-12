<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="xhtml" encoding="UTF-8" indent="yes"/>
    <xsl:strip-space elements="*"/>

    <xsl:template match="/">
        <xsl:result-document href="index.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português</title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1>Arqueossítios do Nordeste Português</h1>
                    <ul class="w3-ul w3-hoverable">
                        <xsl:apply-templates mode="indice"/>
                    </ul>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <xsl:variable name="count" select="position()"/>
            <a href="{$count}">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>

</xsl:stylesheet>
