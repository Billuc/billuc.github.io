<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
	<xsl:template match="/">
		<html>
			<head>
				<title>About me</title>
				<link rel="stylesheet" type="text/css" href="./resume/resumeStyle.css"/>
				<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
			</head>
			<body>
				<div id="content">
					<xsl:apply-templates select="//contact"/>

					<xsl:apply-templates select="//education"/>

					<xsl:apply-templates select="//experiences"/>

					<xsl:apply-templates select="//skills"/>

					<xsl:apply-templates select="//extras"/>
				</div>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="contact">
		<div id="contact">
		<h1><xsl:value-of select="./name/first"/>&#160;<xsl:value-of select="./name/last"/></h1>
		<table>
			<tr>
				<td>Mail Address</td>
				<td><xsl:value-of select="./mail" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>Phone Number</td>
				<td><xsl:value-of select="./tel" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>Birth Date</td>
				<td><xsl:value-of select="./birth/day" ></xsl:value-of> /
					<xsl:value-of select="./birth/month" ></xsl:value-of> /
					<xsl:value-of select="./birth/year" ></xsl:value-of></td>
			</tr>
			<tr>
				<td>Nationality</td>
				<td><xsl:value-of select="./nationality" ></xsl:value-of></td>
			</tr>
			<tr>
				<xsl:apply-templates select="./extra"></xsl:apply-templates>
			</tr>
		</table>
		</div>
	</xsl:template>

	<xsl:template match="education">
		<div id="education">
		<h2>Education</h2>
		<xsl:apply-templates select="./element">
		</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="experiences">
		<div id="experiences">
		<h2>Experiences</h2>
		<xsl:apply-templates select="./element">
		</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="skills">
		<div id="skills">
		<h2>Skills</h2>
		<xsl:apply-templates select="./skill-category">
		</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="extras">
		<div id="extras">
		<h2>Extras</h2>
		<xsl:apply-templates select="./element">
		</xsl:apply-templates>
		</div>
	</xsl:template>

	<xsl:template match="element">
		<div class="element">
			<table>
				<td>
					<xsl:apply-templates select="./start-date"></xsl:apply-templates>
					<xsl:apply-templates select="./end-date"></xsl:apply-templates>
				</td>
				<td>
					<xsl:apply-templates select="./title"></xsl:apply-templates><br/>
					<i><xsl:apply-templates select="./location"></xsl:apply-templates></i>
					<ul><xsl:apply-templates select="./comment"></xsl:apply-templates></ul>
				</td>
			</table>
		</div>
	</xsl:template>

	<xsl:template match="title">
		<span class="title">
			<xsl:value-of select="."></xsl:value-of>
		</span>
	</xsl:template>

	<xsl:template match="start-date">
		<xsl:value-of select="."></xsl:value-of> -
	</xsl:template>

	<xsl:template match="comment">
		<li><xsl:value-of select="."></xsl:value-of></li>
	</xsl:template>

	<xsl:template match="skill-category">
		<tr><td><b><xsl:value-of select="./cat-title"></xsl:value-of></b></td>
		<td><ul><xsl:apply-templates select="./skill"></xsl:apply-templates></ul></td></tr>
	</xsl:template>

	<xsl:template match="skill">
		<li>
			<u><xsl:value-of select="./sk-title"></xsl:value-of></u>
			<xsl:if test="sk-title and comment"> : </xsl:if>
			<xsl:value-of select="./comment"></xsl:value-of>
		</li>
	</xsl:template>

	<xsl:template match="extra">
		<xsl:choose>
			<xsl:when test="title">
				<td><xsl:value-of select="title"></xsl:value-of></td>
				<td><xsl:value-of select="value"></xsl:value-of></td>
			</xsl:when>
			<xsl:otherwise>
				<td colspan="2" style="text-align: center;"><xsl:value-of select="value"></xsl:value-of></td>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>
